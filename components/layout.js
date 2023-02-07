import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export const siteTitle = 'Un Pas De Plus';
export const siteDescription = "Le site de votre coach en développement personnel Sabrina Appriou, fondatrice d'Un Pas De Plus.";
export const siteAuthor = "Antoine Bollinger";
export const siteOwner = "Sabrina Appriou";


export default function Layout({ children, title, props, background, foot, onThisPage }) {
    const [siteUrl, setSiteUrl] = useState('');

    useEffect(() => {
        setSiteUrl(window.location.origin);
    })

    return (
        <React.Fragment>
            <Head>
                <title>{`${title ? `${title} | ` : ''}${siteTitle}`}</title>
                <meta name="description" content={siteDescription} />
                <meta name="author" content={siteAuthor} />
                <link rel="icon" type="image/png" href="/favicon.png" />
                <link rel="icon" type="image/ico" href="/favicon.ico" />
                <meta name="twitter:image:src" content="/preview.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={siteTitle} />
                <meta name="twitter:description" content={siteDescription} />
                <meta property="og:image" content="/preview.jpg" />
                <meta property="og:image:alt" content={siteDescription} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="600" />
                <meta property="og:site_name" content={siteTitle} />
                <meta property="og:type" content="object" />
                <meta property="og:title" content={siteTitle} />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:description" content={siteDescription} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header props={props} background={background} foot={foot} />
            {children}
            < Footer onThisPage={onThisPage} />
            <a className="back-to-top" href="#header">
                <FontAwesomeIcon icon={faChevronUp} />
            </a>
        </React.Fragment>
    )
}