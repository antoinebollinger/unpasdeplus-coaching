import Script from "next/script";

export default function SiteName() {
    return (
        <Script
            type="application/ld+json"
        >
            {
                `{ "name": "Un pas de plus Coaching" }`
            }
        </Script>
    )
}