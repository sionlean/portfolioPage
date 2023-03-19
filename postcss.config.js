const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const postcssImport = require("postcss-import");
const postcssNested = require("postcss-nested");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    postcssImport(),
    postcssNested(),
    postcssPresetEnv({
      stage: 0,
    }),
    tailwindcss(),
    autoprefixer(),
  ],
};
