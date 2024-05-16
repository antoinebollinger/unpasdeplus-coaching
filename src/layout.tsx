"use client"
import React, { useEffect } from "react"
import Script from "next/script"
import Header from "./components/header"
import Footer from "./components/footer"
import Dialog from "./utils/dialog"
import Backtotop from "./components/backtotop"
import { banner, onThisPage } from "./models/types"
import "./utils/sprintf"
import { motion } from "framer-motion"
import Banner from "/public/images/banners/1.jpg"
import Modal from "./utils/modal"

export default function Layout({
    children,
    banner = Banner,
    onThisPage,
    footer = true,
}: {
    children: React.ReactNode,
    banner?: banner,
    onThisPage?: onThisPage[],
    footer?: boolean
}) {
    useEffect(() => {
        document.querySelector("html").style.scrollBehavior = "auto"
        const anchors = document.querySelectorAll("a")
        anchors?.forEach(anchor => anchor.addEventListener("click", _ => {
            document.querySelector("html").style.scrollBehavior = anchor.href.includes("#") ? "smooth" : "auto"
        }))
    }, [])

    return (
        <>
            <motion.div
                initial={{ opacity: 0.1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                id="top"
            >
                <Header banner={banner} />
                {children}
                {footer && <Footer onThisPage={onThisPage} />}
                <Backtotop onThisPage={onThisPage} />
                <Dialog className="z-[999]" />
                <Modal className="z-[999]" />
            </motion.div>
            <Script src="/scripts/axeptio.js" />
        </>
    )
}