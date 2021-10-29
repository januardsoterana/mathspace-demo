// @flow

const express = require('express');
const next = require('next');
const path = require('path');
const rp = require('request-promise');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
require('dotenv').config({ path: '.env' });

const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev: process.env.DEVELOPMENT_MODE === 'true' });
const handle = app.getRequestHandler();

const getConfig = (key, fallback) => {
  if (process.env[key] === undefined || process.env[key] === null) {
    if (fallback !== undefined) {
      return fallback;
    }
  }
  return process.env[key];
};

const ALLOW_CRAWL = getConfig('ALLOW_CRAWL', 'false');
const payload = {
  iss: getConfig('ZOOM_CLIENT_ID', ''),
  exp: new Date().getTime() + 5000,
};
const zoomToken = jwt.sign(payload, getConfig('ZOOM_CLIENT_SECRET', ''));
const MAINTENANCE_MODE = false;

const options = {
  root: path.join(__dirname, '/public/website'),
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8',
  },
};

app.prepare().then(() => {
  const server = express();
  server.set('strict routing', true);

  server.get('/robots.txt', (req, res) => {
    if (ALLOW_CRAWL === 'true')
      return res.status(200).sendFile('robots.txt', options);
    return res.status(200).sendFile('robots-no-crawl.txt', options);
  });

  server.get('/sitemap.xml', (req, res) =>
    res.status(200).sendFile('sitemap.xml', options),
  );

  // ============================================ \\

  server.get('/', (req, res) => {
    if (
      (req && req.headers['cf-ipcountry'] === 'AU') ||
      (req.query.country && req.query.country === 'AU')
    ) {
      res.redirect('/au');
    } else {
      res.redirect('/us');
    }
  });

  server.get('/schools(/)?', (req, res) => {
    if (
      (req && req.headers['cf-ipcountry'] === 'AU') ||
      (req.query.country && req.query.country === 'AU')
    ) {
      res.redirect('/au/teachers');
    } else {
      res.redirect('/us');
    }
  });

  server.get('/curriculum(/)?', (req, res) => {
    if (
      (req && req.headers['cf-ipcountry'] === 'AU') ||
      (req.query.country && req.query.country === 'AU')
    ) {
      res.redirect('/au/curriculum');
    } else {
      res.redirect('/us/curriculum');
    }
  });

  server.get('/checkpoints(/)?', (req, res) => {
    if (
      (req && req.headers['cf-ipcountry'] === 'AU') ||
      (req.query.country && req.query.country === 'AU')
    ) {
      res.redirect('/au/checkpoints');
    } else {
      res.redirect('/us/checkpoints');
    }
  });

  server.get('/waypoints(/)?', (req, res) => {
    if (
      (req && req.headers['cf-ipcountry'] === 'AU') ||
      (req.query.country && req.query.country === 'AU')
    ) {
      res.redirect('/au/waypoints');
    } else {
      res.redirect('/us/waypoints');
    }
  });

  server.get('/newsroom(/)?', (req, res) => {
    if (
      (req && req.headers['cf-ipcountry'] === 'AU') ||
      (req.query.country && req.query.country === 'AU')
    ) {
      res.redirect('/au/newsroom');
    } else {
      res.redirect('/us/newsroom');
    }
  });

  // Legacy privacy policy redirects
  server.get('/public/privacy-policy(/)?', (req, res) => {
    if (
      (req && req.headers['cf-ipcountry'] === 'US') ||
      (req.query.country && req.query.country === 'US')
    ) {
      res.redirect('/us/privacy-policy');
    } else {
      res.redirect('/au/privacy-policy');
    }
  });

  server.get('/privacy-policy(/)?', (req, res) => {
    if (
      (req && req.headers['cf-ipcountry'] === 'US') ||
      (req.query.country && req.query.country === 'US')
    ) {
      res.redirect('/us/privacy-policy');
    } else {
      res.redirect('/au/privacy-policy');
    }
  });

  server.get('/au/', (req, res) => {
    res.redirect('/au');
  });

  server.get('/au/teachers/', (req, res) => {
    res.redirect('/au/teachers');
  });

  server.get('/au/coaching/', (req, res) => {
    res.redirect('/au/coaching');
  });

  server.get('/au/diagnostic/', (req, res) => {
    res.redirect('/au/diagnostic');
  });

  server.get('/us/', (req, res) => {
    res.redirect('/us');
  });

  server.get('/careers/', (req, res) => {
    res.redirect('/careers');
  });

  server.get('/careers/engineering/', (req, res) => {
    res.redirect('/careers/engineering');
  });

  server.get('/public/terms-of-use/', (req, res) => {
    res.redirect('/terms-of-use');
  });

  server.get('/digitaledge/', (req, res) => {
    res.redirect('/digitaledge');
  });

  server.get('/new-workbook/', (req, res) => {
    res.redirect('/new-workbook');
  });

  // ============================================ \\

  server.get('/uk/', (req, res) => {
    res.redirect(301, '/us');
  });

  server.get('/uk', (req, res) => {
    res.redirect(301, '/us');
  });

  server.get('/uk/newsroom', (req, res) => {
    res.redirect(301, '/us/newsroom');
  });

  server.get('/uk/curriculum', (req, res) => {
    res.redirect(301, '/us/curriculum');
  });

  // ============================================ \\

  // Redirect challenge pages back to homepage
  server.get('/au/challenge', (req, res) => {
    res.redirect('/au');
  });

  server.get('/au/challenge-rules', (req, res) => {
    res.redirect('/au');
  });

  server.get('/us/rss-challenge', (req, res) => {
    res.redirect('/us');
  });

  // ============================================ \\

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  server.post('/au/api/register', (req, res) => {
    const {
      webinarID,
      firstName,
      lastName,
      email,
      userType,
      schoolName,
    } = req.body;
    const zoomRequestOptions = {
      method: 'POST',
      uri: `https://api.zoom.us/v2/webinars/${webinarID}/registrants`,
      qs: {
        status: 'active',
      },
      auth: {
        bearer: zoomToken,
      },
      headers: {
        'User-Agent': 'Zoom-api-Jwt-Request',
        'content-type': 'application/json',
      },
      body: {
        first_name: firstName,
        last_name: lastName,
        email,
        custom_questions: [
          {
            title: 'Are you a teacher or a student?',
            value: userType,
          },
          {
            title: 'Which school are you from?',
            value: schoolName,
          },
        ],
      },
      json: true,
    };
    rp(zoomRequestOptions)
      .then(response => {
        res.status(201).json(response);
      })
      .catch(response => {
        res.status(300).json(response.error);
      });
  });

  // ============================================ \\

  if (MAINTENANCE_MODE) {
    // NextJS will only handle the list of routes defined below.
    // All other routes will be redirected to the 503
    [
      '/',
      '/new-workbook',
      '/weekly-insights',
      '/terms-of-use',
      '/privacy-policy',
      '/digitaledge',
      '/careers',
      '/careers/engineering',
      '/schools',
      '/curriculum',
      '/au',
      '/au/teachers',
      '/au/curriculum',
      '/au/coaching',
      '/au/newsroom',
      '/au/privacy-policy',
      '/au/diagnostic',
      '/us',
      '/us/curriculum',
      '/us/newsroom',
      '/us/challenge',
      '/us/challenge-rules',
    ].forEach(route => {
      server.get(`${route}(/)?`, (req, res) => handle(req, res));
    });

    // Redirects all other pages to the maintenance page with 503
    // status code.
    server.get('*', (req, res) => {
      res.statusCode = 503;
      app.render(req, res, '/maintenance', {});
    });
  } else {
    server.get('*', (req, res) => handle(req, res));
  }

  server.listen(port, err => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`);
  });
});
