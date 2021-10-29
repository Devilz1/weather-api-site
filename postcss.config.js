const postcssCustomMedia = require('postcss-custom-media');

module.exports = {
    plugins: ['postcss-preset-env', postcssCustomMedia()],
};
