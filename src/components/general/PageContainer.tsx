import React from 'react'
import style from '@/styles/components/general/PageContainer.module.scss'

interface PageContainerProps {
  children: React.ReactNode,
  ignorePadding?: boolean,
  noCentering?: boolean,
}

const PageContainer = (props: PageContainerProps) => (
  <div className={`${props.ignorePadding ? '' : style.pageContainer} ${props.noCentering  ? '' : 'content-container'}`}>
    {props.children}
  </div>
)

export default PageContainer

