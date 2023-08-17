'use client'
import React, { useEffect } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Modal from './utils/modal'
import Backtotop from './components/backtotop'

export default function Layout({ children, headerProps, banner = {}, onThisPage }: {
    children: React.ReactNode,
    headerProps?: Object,
    banner: Object,
    onThisPage?: any
}) {
    useEffect(() => {
        document.querySelector('html').style.scrollBehavior = 'auto'
        const anchors = document.querySelectorAll('a')
        anchors?.forEach(anchor => anchor.addEventListener('click', _ => {
            document.querySelector('html').style.scrollBehavior = anchor.href.includes('#') ? 'smooth' : 'auto'
        }))
    }, [])

    return (
        <React.Fragment>
            <Header headerProps={headerProps} banner={banner} />
            {children}
            <Footer onThisPage={onThisPage} />
            <Backtotop onThisPage={onThisPage} />
            <Modal className="z-[999]" />
        </React.Fragment>
    )
}