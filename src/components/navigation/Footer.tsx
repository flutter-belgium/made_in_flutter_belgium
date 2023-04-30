import Link from 'next/link'
import React from 'react'
import appConfig from '@/config/appConfig'
import style from '@/styles/components/navigation/Footer.module.scss'
import { translations } from '@/util/locale/localization'
import { openCookieConsent } from '@/util/cookie_consent/cookie_consent_config'

const Footer = () => {
    const currentLocale = appConfig.env.currentLocale
    const locales = appConfig.locales

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

            <div className={style.linkContainer}>
                <button
                    onClick={openCookieConsent}
                    aria-label='Show cookie consent'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                        <path d="M224,128a96,96,0,1,1-96-96,48,48,0,0,0,48,48A48,48,0,0,0,224,128Z" opacity="0.2"></path>
                        <path d="M164.49,163.51a12,12,0,1,1-17,0A12,12,0,0,1,164.49,163.51Zm-81-8a12,12,0,1,0,17,0A12,12,0,0,0,83.51,155.51Zm9-39a12,12,0,1,0-17,0A12,12,0,0,0,92.49,116.49Zm48-1a12,12,0,1,0,0,17A12,12,0,0,0,140.49,115.51ZM232,128A104,104,0,1,1,128,24a8,8,0,0,1,8,8,40,40,0,0,0,40,40,8,8,0,0,1,8,8,40,40,0,0,0,40,40A8,8,0,0,1,232,128Zm-16.31,7.39A56.13,56.13,0,0,1,168.5,87.5a56.13,56.13,0,0,1-47.89-47.19,88,88,0,1,0,95.08,95.08Z"></path>
                    </svg>
                </button>
                <Link
                    href='https://github.com/flutter-belgium/made_in_flutter_belgium/issues/new'
                    target='_blank'
                    aria-label="Report bug">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                        <path d="M208,128v16a80,80,0,0,1-160,0V128Z" opacity="0.2"></path>
                        <path d="M144,92a12,12,0,1,1,12,12A12,12,0,0,1,144,92ZM100,80a12,12,0,1,0,12,12A12,12,0,0,0,100,80Zm116,64A87.76,87.76,0,0,1,213,167l22.24,9.72A8,8,0,0,1,232,192a7.89,7.89,0,0,1-3.2-.67L207.38,182a88,88,0,0,1-158.76,0L27.2,191.33A7.89,7.89,0,0,1,24,192a8,8,0,0,1-3.2-15.33L43,167A87.76,87.76,0,0,1,40,144v-8H16a8,8,0,0,1,0-16H40v-8a87.76,87.76,0,0,1,3-23L20.8,79.33a8,8,0,1,1,6.4-14.66L48.62,74a88,88,0,0,1,158.76,0l21.42-9.36a8,8,0,0,1,6.4,14.66L213,89.05a87.76,87.76,0,0,1,3,23v8h24a8,8,0,0,1,0,16H216ZM56,120H200v-8a72,72,0,0,0-144,0Zm64,95.54V136H56v8A72.08,72.08,0,0,0,120,215.54ZM200,144v-8H136v79.54A72.08,72.08,0,0,0,200,144Z"></path>
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default Footer