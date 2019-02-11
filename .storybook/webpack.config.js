const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
    // env has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Extend defaultConfig as you need.

    return defaultConfig;
};
