import appConfig from '@/config/appConfig'
import React from 'react'

interface ImageProps {
    src: string,
    alt: string,
    height?: number,
    width?: number,
    className?: string,
}

const Image = (props: ImageProps) => {
    var url = props.src
    if (!url.startsWith('http')) {
        url = appConfig.env.basePath + url
    }
    return (
        <img
            className={props.className}
            src={url}
            alt={props.alt}
            height={props.height}
            width={props.width} />
    )
}


export default Image