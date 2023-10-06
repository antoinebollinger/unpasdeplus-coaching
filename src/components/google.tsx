import Script from "next/script";

export default function GoogleAnalytics() {
    return (
        <>
            <Script
                id="google_1"
                strategy="lazyOnload"
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <Script
                id="google_2"
                strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                `}
            </Script>
        </>
    )
}