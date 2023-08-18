import Layout from '../../src/layout'
import Parcours from '../../src/sections/qui-je-suis/parcours'
import Pourquoi from '../../src/sections/qui-je-suis/pourquoi'
import Bio from '../../src/sections/qui-je-suis/bio'
import Banner from '/public/images/banners/quijesuis-intro.webp'
import { siteData } from '../../src/data/metadata'

export const metadata = {
    title: `Qui je suis | ${siteData.title}`
}

export default function Page() {
    const onThisPage = [
        {
            title: 'Mon parcours',
            link: '#header'
        },
        {
            title: 'Pourquoi Un pas de plus&nbsp;?',
            link: '#pourquoi'
        },
        {
            title: 'Ma bio',
            link: '#bio'
        },
    ];

    return (
        <Layout banner={Banner} onThisPage={onThisPage}>
            <Parcours />
            <Pourquoi />
            <Bio />
        </Layout>
    )
}