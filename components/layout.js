import Head from "next/head";
import React from "react";
import Navbar from "./navbar";
import BodyClass from "./body";

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <BodyClass />
            <Head>
                <title>Un pas de plus</title>
                <meta name="description" content="Le site de votre coach en développement personnel Sabrina Appriou" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            {children}
        </React.Fragment>
    )
}