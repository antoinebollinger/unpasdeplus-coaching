import Head from "next/head";
import React from "react";
import Navbar from "./navbar";
import BodyClass from "./body";
import Footer from "./footer";

export const siteTitle = 'UnPasDePlus'

export default function Layout({ children, home, title }) {
    return (
        <React.Fragment>
            <BodyClass />
            <Head>
                <title>{`${siteTitle}${title ? ` | ${title}` : ''}`}</title>
                <meta name="description" content="Le site de votre coach en développement personnel Sabrina Appriou" />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar home={home} />
            {children}
            <Footer />
        </React.Fragment>
    )
}