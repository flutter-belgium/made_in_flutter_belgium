import Link from 'next/link'
import React from 'react'
import appConfig from '@/config/appConfig'
import style from '@/styles/components/navigation/Footer.module.scss'
import { translations } from '@/util/locale/localization'
import { useRouter } from 'next/router'
import { openCookieConsent } from '@/util/cookie_consent/cookie_consent_config'

const Footer = () => {
    const currentLocale = appConfig.env.currentLocale
    const locales = appConfig.locales

    const router = useRouter()
    const pathName = router.pathname
    if (pathName == '/login') return <></>
    const localeKeys = Object.keys(locales)
    return (
        <div className={style.container}>
            <p>
                {
                    localeKeys.length > 1 ?
                        localeKeys.map((l, index) => <Link
                            key={l}
                            href={Object.values(locales)[index]}
                            locale={l}
                            className={`${style.languageBtn} ${l == currentLocale ? style.activeLocale : ''}`}>{l}</Link>)
                        : null
                }
            </p>
            <p>
                {appConfig.website.name} {new Date().getFullYear()}. {translations.disclamer_dev} <span><a href={appConfig.dev.website} target='blank'>{appConfig.dev.name}</a></span>
            </p>

            <button onClick={openCookieConsent}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                    <path d="M224,128a96,96,0,1,1-96-96,48,48,0,0,0,48,48A48,48,0,0,0,224,128Z" opacity="0.2"></path>
                    <path d="M164.49,163.51a12,12,0,1,1-17,0A12,12,0,0,1,164.49,163.51Zm-81-8a12,12,0,1,0,17,0A12,12,0,0,0,83.51,155.51Zm9-39a12,12,0,1,0-17,0A12,12,0,0,0,92.49,116.49Zm48-1a12,12,0,1,0,0,17A12,12,0,0,0,140.49,115.51ZM232,128A104,104,0,1,1,128,24a8,8,0,0,1,8,8,40,40,0,0,0,40,40,8,8,0,0,1,8,8,40,40,0,0,0,40,40A8,8,0,0,1,232,128Zm-16.31,7.39A56.13,56.13,0,0,1,168.5,87.5a56.13,56.13,0,0,1-47.89-47.19,88,88,0,1,0,95.08,95.08Z"></path>
                </svg>
            </button>
        </div >
    )
}

export default Footer