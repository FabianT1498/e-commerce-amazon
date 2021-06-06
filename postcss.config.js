const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const postCSSImport = require('postcss-import')
const postCSSNested = require('postcss-nested')
const postcssCustomMedia = require('postcss-custom-media')
const postCssCssVariables = require('postcss-css-variables')()
const postCSSInlineSVG = require('postcss-inline-svg')()
const postCsssUtilities = require('postcss-utilities');

const postCssImport = postCSSImport({
  addDependencyTo: webpack,
})

const colorFunction = require('postcss-color-function')

module.exports = {
  plugins: [
    postCssImport,
    autoprefixer,
    postCSSNested,
    postCssCssVariables,
    postCSSInlineSVG,
    colorFunction,
    postcssCustomMedia({
      importFrom: 'src/components/_settings/_medias.css'
    }),
    postCsssUtilities
  ],
}
