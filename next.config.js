module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/work': { page: '/work' },
      '/blog': { page: '/blog' },
      '/contact': { page: '/contact' },
    };
  },
};
