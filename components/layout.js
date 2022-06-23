import Head from "next/head";
import React from "react";
import Navbar from "./navbar";
import BodyClass from "./body";
import Footer from "./footer";

export const siteUrl = window.location.origin;
export const siteTitle = 'UnPasDePlus';
export const siteDescription = "Le site de votre coach en développement personnel Sabrina Appriou, fondatrice d'Un Pas De Plus.";
export const siteAuthor = "Antoine Bollinger";
export const siteOwner = "Sabrina Appriou";


export default function Layout({ children, home, title }) {
    return (
        <React.Fragment>
            <BodyClass />
            <Head>
                <title>{`${siteTitle}${title ? ` | ${title}` : ''}`}</title>
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
            <Navbar home={home} />
            {children}
            <Footer />
        </React.Fragment>
    )
}