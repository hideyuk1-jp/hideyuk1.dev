/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

const rehypeHighlight = require('rehype-highlight');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypeHighlight],
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'tx', 'tsx', 'md', 'mdx'],
  exportTrailingSlash: true,
  async exportPathMap() {
    const paths = {
      '/': { page: '/' },
      '/work': { page: '/work' },
      '/blog': { page: '/blog' },
      '/contact': { page: '/contact' },
    };

    const posts = await fs.readdirSync('./src/pages/blog/');

    posts.filter(RegExp.prototype.test, /\.mdx$/).forEach(post => {
      const postPath = post.replace(/^(.+)\.mdx$/, (match, p1) => {
        return `/blog/${p1}`;
      });
      paths[postPath] = { page: postPath };
    });

    return paths;
  },
});
