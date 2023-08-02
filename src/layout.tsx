'use client'
import React, { useEffect } from 'react'
import Header from './components/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Footer from './components/footer'
import Modal from './utils/modal'

export default function Layout({ children, headerProps, banner = {}, onThisPage }: {
    children: React.ReactNode,
    headerProps?: Object,
    banner: Object,
    onThisPage?: any
}) {
    return (
        <React.Fragment>
            <Header headerProps={headerProps} banner={banner} />
            {children}
            <Footer onThisPage={onThisPage} />
            <a className="back-to-top" href="#header" aria-label="Haut de page">
                <FontAwesomeIcon icon={faChevronUp} />
            </a>
            <Modal className="z-[999]" />
        </React.Fragment>
    )
}