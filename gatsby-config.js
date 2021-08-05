module.exports = {
  flags: {
    FAST_DEV: true,
  },
  siteMetadata: {
    title: `Gatsby Basic Typescript Starter`,
    description: `A Gatsby Typescript starter template`,
    author: `@chhpt`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          styles: `src/styles`,
          config: `config/`,
          '@': 'src/',
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
