import Script from "next/script";

export default function GoogleAnalytics() {
    return (
        <>
            <Script
                strategy="lazyOnload"
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <Script
                strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-Z333G07JWE');
                `}
            </Script>
        </>
    )
}