const sitemap = require('nextjs-sitemap-generator')
const path = require('path')

sitemap({
    baseUrl: 'madein.flutterbelgium.be',
    pagesDirectory: path.resolve(__dirname, '../out_full_export/'),
    targetDirectory: path.resolve(__dirname, '../out_full_export/'),
    ignoredExtensions: ['js', 'map', 'json', 'xml', 'css', 'png', 'svg', 'jpg', 'jpeg', 'icon', 'zip', ' webp'],
    ignoredPaths: [
        'robots',
        'favicon',
        '404',
        'index',
    ],
    extraPaths: [
        '/',
    ],
})