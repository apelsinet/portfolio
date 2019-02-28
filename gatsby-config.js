module.exports = {
    siteMetadata: {
        title: 'Mattias Prada',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    'Open Sans',
                    `Markazi Text`, // you can also specify font weights and styles
                ],
            },
        },
    ],
};
