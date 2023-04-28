import en from '@/util/locale/translations/en.json'
import appConfig from '@/config/appConfig'

export var translations = en

export function withTranslations() {
    const locale = appConfig.env.currentLocale
    switch (locale) {
        case 'en':
        default:
            translations = en
            break

    }
}