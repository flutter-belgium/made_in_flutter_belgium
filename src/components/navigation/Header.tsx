import Link from 'next/link'
import React, { useState } from 'react'
import style from '@/styles/components/navigation/Header.module.scss'
import Image from 'next/image'
import PageContainer from '../general/PageContainer'

const Header = () => {
    const [openMobileMenu, setMobileMenuOpen] = useState<boolean>(false)

    const onClickMobileMenu = () => {
        setMobileMenuOpen(!openMobileMenu)
    }

    return (
        <div className={style.rootContainer}>
            <PageContainer
                ignorePadding={true}>
                <div className={style.container}>
                    <div className={style.primaryHeader}>
                        <Link href='/'>
                            <Image
                                className={style.logo}
                                src='images/logo.svg'
                                height={42}
                                width={160}
                                alt='logo' />
                        </Link>
                        <div className={style.mobileMenuButton}>
                            <button onClick={onClickMobileMenu} aria-label="Menu">
                                <svg fill="black" height="48px" width="48px" version="1.1" id="Capa_1" viewBox="0 0 56 56">
                                    <g>
                                        <path d="M40,16H16c-0.553,0-1,0.448-1,1s0.447,1,1,1h24c0.553,0,1-0.448,1-1S40.553,16,40,16z" />
                                        <path d="M40,27H16c-0.553,0-1,0.448-1,1s0.447,1,1,1h24c0.553,0,1-0.448,1-1S40.553,27,40,27z" />
                                        <path d="M40,38H16c-0.553,0-1,0.448-1,1s0.447,1,1,1h24c0.553,0,1-0.448,1-1S40.553,38,40,38z" />
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className={`${style.links} ${openMobileMenu ? style.openMobileMenu : style.closeMobileMenu}`}>
                        <Link
                            href='https://github.com/flutter-belgium/made_in_flutter_belgium_data'
                            target='_blank'
                            aria-label="Visit the data repository">
                            <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.74 0 0 11.0117 0 24.6071C0 35.4957 6.87 44.6926 16.41 47.953C17.61 48.1683 18.06 47.4301 18.06 46.7842C18.06 46.1997 18.03 44.2619 18.03 42.2011C12 43.3392 10.44 40.6939 9.96 39.3098C9.69 38.6023 8.52 36.4184 7.5 35.834C6.66 35.3726 5.46 34.2346 7.47 34.2038C9.36 34.173 10.71 35.9878 11.16 36.726C13.32 40.4478 16.77 39.402 18.15 38.7561C18.36 37.1567 18.99 36.0801 19.68 35.4649C14.34 34.8497 8.76 32.7274 8.76 23.3152C8.76 20.6392 9.69 18.4245 11.22 16.702C10.98 16.0869 10.14 13.5646 11.46 10.1812C11.46 10.1812 13.47 9.53523 18.06 12.7034C19.98 12.1497 22.02 11.8729 24.06 11.8729C26.1 11.8729 28.14 12.1497 30.06 12.7034C34.65 9.50447 36.66 10.1812 36.66 10.1812C37.98 13.5646 37.14 16.0869 36.9 16.702C38.43 18.4245 39.36 20.6084 39.36 23.3152C39.36 32.7581 33.75 34.8497 28.41 35.4649C29.28 36.2339 30.03 37.7103 30.03 40.0172C30.03 43.3084 30 45.9537 30 46.7842C30 47.4301 30.45 48.1991 31.65 47.953C41.13 44.6926 48 35.4649 48 24.6071C48 11.0117 37.26 0 24 0Z" fill="#333333" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </PageContainer>
        </div>
    )
}

export default Header