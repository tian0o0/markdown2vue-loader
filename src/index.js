const loaderUtils = require('loader-utils');
const MarkdownIt = require('markdown-it');
const anchor = require('markdown-it-anchor');
const emoji = require('markdown-it-emoji');
const highlight = require('./highlight');
const cardWrapper = require('./card-wrapper');
const { slugify } = require('transliteration'); // slugify('你好, world!') ---> ni-hao-world

function wrapper(content) {
  content = cardWrapper(content);
  content = encodeURIComponent(content);

  return `
    <template>
    <section v-html="decodeURIComponent(\`${content}\`)" v-once />
    </template>
    `;
}

module.exports = function (source) {
  let options = loaderUtils.getOptions(this) || {};
  this.cacheable && this.cacheable();

  options = {
    wrapper,
    ...options
  };

  const parser = new MarkdownIt({
    html: true,
    highlight
  }).use(anchor, {
    permalink: true,
    permalinkBefore: true,
    permalinkSymbol: options.linkSymbol || '👉🏻',
    level: 1,
    slugify
  }).use(emoji);

  return options.wrapper(parser.render(source));
};
