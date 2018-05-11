module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "netmag-wpheadless.herokuapp.com",
        protocol: "http",
        hostingWPCOM: false,
        useACF: false,
        auth: {},
        verbose: true,
        searchAndReplaceContentUrls: {

        }
      },
    },
  ],
}
