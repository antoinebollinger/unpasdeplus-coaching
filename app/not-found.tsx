import Link from 'next/link'
import { siteData } from '../src/data/metadata'
import Layout from '../src/layout'
import Banner from '/public/images/banners/home.webp'

export const metadata = {
    title: `${siteData.title} | Not found`
}

export default function NotFound() {
    return (
        <Layout headerProps banner={Banner}>
            <div className="flex flex-col items-center">
                <h2>Oups !</h2>
                <p>La page que vous recherchez semble introuvable</p>
                <Link href="/">Revenir à la page d'accueil</Link>
            </div>
        </Layout >
    )
}