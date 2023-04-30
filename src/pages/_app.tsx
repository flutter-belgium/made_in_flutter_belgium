import { useEffect } from 'react'
import Layout from '@/components/general/Layout'
import { Poppins } from 'next/font/google'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { withTranslations } from '@/util/locale/localization'
import configureCookieConsent, { gaClientId } from '@/util/cookie_consent/cookie_consent_config'
import React from 'react'
import Script from 'next/script'
import { configureApi } from '@/service/api_service'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  withTranslations()
  configureApi()

  useEffect(() => {
    configureCookieConsent()
  }, [])

  return <>
    <div className={poppins.className}>
      {/* <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });

            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','${gaClientId}');`,
        }} /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
    <script id="ga-script-container"></script>
  </>
}

export default MyApp
