const appConfig = {
    website: {
        name: 'made in (flutter) Belgium',
        gitRepo: {
            website: 'https://github.com/flutter-belgium/made_in_flutter_belgium',
            data: 'https://github.com/flutter-belgium/made_in_flutter_belgium_data',
        },
        privacyPolicy: 'https://madein.flutterbelgium.be/privacy-policy',
        cookiePolicy: 'https://madein.flutterbelgium.be/cookie-policy',
    },
    dev: {
        website: "http://flutterbelgium.be/",
        name: "Flutter Belgium",
    },
    env: {
        basePath: process.env.basePath,
        currentLocale: process.env.locale,
    },
    locales: {
        en: 'https://madein.flutterbelgium.be/',
    }
}

export default appConfig