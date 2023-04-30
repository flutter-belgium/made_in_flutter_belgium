import { getPreferences, show, init, onPreferencesChanged } from 'cookie-though'
import { Config, CookiePreferences } from 'cookie-though/dist/types/types'
import { translations } from '@/util/locale/localization'
import appConfig from '@/config/appConfig'

export const gaClientId = 'TODO-ADD-GA-CLIENT-ID'

const config: Config = {
    "policies": [
        {
            "id": "essential",
            "label": translations.cookie_consent_essential_title,
            "description": translations.cookie_consent_essential_description,
            "category": "essential",
        },
        {
            "id": "statistics",
            "label": translations.cookie_consent_statistics_title,
            "category": "statistics",
            "description": translations.cookie_consent_statistics_description,
        },
    ],
    "essentialLabel": translations.cookie_consent_always_on,
    "permissionLabels": {
        "accept": translations.cookie_consent_accept_btn,
        "acceptAll": translations.cookie_consent_accept_all_btn,
        "decline": translations.cookie_consent_decline_btn
    },
    "cookiePreferenceKey": "cookie-preferences",
    "header": {
        "title": translations.cookie_consent_header_title,
        "description": translations.cookie_consent_header_description
    },
    "cookiePolicy": {
        "url": appConfig.website.cookiePolicy,
        "label": translations.cookie_consent_policy_read_more,
    },
    "customizeLabel": "Customize"
}

const configureCookieConsent = () => {
    init(config)
    setCorrectPreferences(getPreferences())
    onPreferencesChanged((preferences) => {
        setCorrectPreferences(preferences)
    })
}

export const openCookieConsent = () => {
    show()
}

const setCorrectPreferences = (preferences: CookiePreferences) => {
    // const statisticsPrefs = preferences.cookieOptions.find((e) => e.id == 'statistics')
    // window.gtag('consent', 'update', {
    //     analytics_storage: statisticsPrefs?.isEnabled ? 'granted' : 'denied',
    // });
}

export default configureCookieConsent
