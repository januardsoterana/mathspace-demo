// eslint-disable-next-line flowtype/require-valid-file-annotation
require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  webpack: config => {
    const updatedConfig = config;
    updatedConfig.plugins = config.plugins || [];
    updatedConfig.plugins = [
      ...updatedConfig.plugins,
      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];
    return updatedConfig;
  },
};
