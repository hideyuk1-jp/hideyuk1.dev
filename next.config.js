/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

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
    const readSubDirSync = folderPath1 => {
      const results = [];

      const readTopDirSync = folderPath => {
        let items = fs.readdirSync(folderPath);
        items = items.map(itemName => {
          return path.join(folderPath, itemName);
        });
        items.forEach(itemPath => {
          results.push(itemPath);
          if (fs.statSync(itemPath).isDirectory()) {
            readTopDirSync(itemPath);
          }
        });
      };
      readTopDirSync(folderPath1);
      return results;
    };
    const posts = await readSubDirSync('./src/pages/blog/');

    const paths = {
      '/': { page: '/' },
      '/work': { page: '/work' },
      '/blog': { page: '/blog' },
      '/contact': { page: '/contact' },
    };

    posts.filter(RegExp.prototype.test, /index\.mdx$/).forEach(post => {
      const postPath = post.replace(/src\/pages\/blog\/(.+)\/index\.mdx/, (match, p1) => {
        return `/blog/${p1}`;
      });
      paths[postPath] = { page: postPath };
    });

    return paths;
  },
});
