import React from 'react'
import Footer from '@/components/navigation/Footer'
import Header from '@/components/navigation/Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
)

export default Layout

