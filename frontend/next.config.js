module.exports = {
    async redirects() {
      return [
        {
          source: '/admin',
          destination: 'http://localhost:1337/admin',
          permanent: true,
        },
      ]
    },
  }