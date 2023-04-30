import appConfig from '@/config/appConfig'
import { translations } from '@/util/locale/localization'
import Head from 'next/head'
import React from 'react'

interface MetaProps {
  title: string,
}

const defaultProps: MetaProps = {
  title: appConfig.website.name,
}

const Meta = (props: MetaProps) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <base href="/" />
        <meta name="description" content={translations.meta_description} />
        <meta name="keywords" content={translations.meta_keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {Object.keys(appConfig.locales).map((language, index) => (
          <link key={language} rel="alternate" hrefLang={language} href={Object.values(appConfig.locales)[index]} />)
        )}
      </Head>
    </>
  )
}

Meta.defaultProps = defaultProps

export default Meta