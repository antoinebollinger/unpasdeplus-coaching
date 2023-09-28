'use client'
import React, { useEffect } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Modal from './utils/modal'
import Backtotop from './components/backtotop'
import { banner, headerProps, onThisPage } from './models/types'
import './utils/sprintf'
import { motion } from 'framer-motion'
import Banner from '/public/images/banners/accueil.webp'
import Script from 'next/script'

export default function Layout({
    children,
    headerProps,
    banner = Banner,
    onThisPage
}: {
    children: React.ReactNode,
    headerProps?: headerProps,
    banner?: banner,
    onThisPage?: onThisPage[]
}) {
    useEffect(() => {
        document.querySelector('html').style.scrollBehavior = 'auto'
        const anchors = document.querySelectorAll('a')
        anchors?.forEach(anchor => anchor.addEventListener('click', _ => {
            document.querySelector('html').style.scrollBehavior = anchor.href.includes('#') ? 'smooth' : 'auto'
        }))
    }, [])

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Header headerProps={headerProps} banner={banner} />
                {children}
                <Footer onThisPage={onThisPage} />
                <Backtotop onThisPage={onThisPage} />
                <Modal className="z-[999]" />
            </motion.div>
            <Script src="/scripts/axeptio.js" />
        </>
    )
}