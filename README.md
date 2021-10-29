# Mathspace Website

This repo contains the marketing and community pages of the [Mathspace site](https://mathspace.co/au).

It runs on [NextJS](https://github.com/zeit/next.js/), which is a framework for server side rendered react apps. I recommend reading through their documentation and looking at their examples directory before starting.

## Setup

This project uses Node 10 and Yarn

1. **Install Node 10, if you do not have it already**

   On macOS, I suggest installing NVM (Node Version Manager) through homebrew:

   ```shell
   brew install nvm
   ```

   Install Node 10:

   ```shell
   nvm install 10
   ```

   Activate Node 10:

   ```shell
   nvm use
   ```

   Then check that `node` is the right version:

   ```shell
   node --version
   # v10.21.0
   ```

2. **Install Yarn, if you do not have it already**

   On macOS, you can install yarn through homebrew:

   ```shell
   brew install yarn
   ```

3. **Install dependencies**

   ```shell
   yarn install
   ```

4. **Setup environment variables**

   Copy the file `.env.example` to `.env`.

   ```shell
   cp .env.example .env
   ```

5. **Run the build**

   This only needs to be run once, and when new pages are added.

   ```shell
   yarn build
   ```

6. **Run the development server**

   ```shell
   yarn dev
   ```

   You can now view the site on [localhost:3000/](http://localhost:3000/)

## AU and US sites

There are two versions of the site, targeting different regions:

- http://localhost:3000/au - for Australian users
- http://localhost:3000/us - for US and international users

## Type checking with flow

We're using [flow](https://flow.org/) for type checking. You can setup flow using the [VScode extension](https://github.com/flowtype/flow-for-vscode) or run it through terminal using the command

```shell
yarn flow
```

## Linting with Eslint

We're using eslint and following [Airbnb's](https://www.npmjs.com/package/eslint-config-airbnb) and our very own [Mathspace](https://www.npmjs.com/package/eslint-config-mathspace) rules. You can run eslint through VScode using this [extension](https://github.com/Microsoft/vscode-eslint) or run it via this command

```shell
yarn eslint
```

## Code formatting with Prettier

To ensure our code is formatted with a consistent style, we are using the [preitter](https://github.com/prettier/prettier) library. After adding the dependency you can then download the VScode [extention](https://github.com/prettier/prettier-vscode). After you have installed the extention, add in this config to your settings file.

```
//-------- Prettier config --------
"prettier.singleQuote": true,
"prettier.trailingComma": "all",
"[javascriptreact]": {
  "editor.formatOnSave": true
},
```

After adding in this config, prettier will then make changes to any edited files on save.

## Adding in new pages

New pages can be added by creating a new `.jsx` file under the pages directory. The name of the file is important as it will become the name of the route. New pages will be available while on localhost, but won't be available on staging or production until we add them to the whitelist of allowed routes.

## Custom server and redirects

We're using [NextJs custom server](https://github.com/zeit/next.js/#custom-server-and-routing) to help us redirect users to different pages. With our current setup, we use redirects to change users to the appropiate country page based on the [country IP determined by Cloudflare](https://support.cloudflare.com/hc/en-us/articles/200168236-What-does-Cloudflare-IP-Geolocation-do-). Redirects are also used to help us redirect old routes on mathspace which ended with trailing slashes to non-trailing slashes since NextJS has problems dealng with trailing slashes.
To add in an additional redirect, you can add the following code block to the `server.js` file, which can be found in the root of the project

```
server.get('<route-redirected-from>', (req, res) => {
    res.redirect('<route-redirecting-to>');
});
```
