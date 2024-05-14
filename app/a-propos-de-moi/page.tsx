import Layout from '../../src/layout'
import Parcours from '../../src/sections/a-propos-de-moi/parcours'
import Pourquoi from '../../src/sections/a-propos-de-moi/pourquoi'
import Bio from '../../src/sections/a-propos-de-moi/bio'
import Banner from '/public/images/banners/4.jpg'
import { siteData } from '../../src/data/metadata'

export const metadata = {
    title: `À propos de moi | ${siteData.title}`,
    description: `Sabrina Appriou, fondatrice Un pas de plus Coaching, coach consultante professionnelle certifiée RNCP, basée à Vannes (56). ${siteData.description}`
}

export default function Page() {
    const onThisPage = [
        {
            title: 'Mon parcours',
            link: '#header'
        },
        {
            title: 'Pourquoi Un pas de plus Coaching&nbsp;?',
            link: '#pourquoi'
        },
        {
            title: 'Ma bio',
            link: '#bio'
        },
    ];

    return (
        <Layout banner={Banner} onThisPage={onThisPage}>
            <Bio />
            <Parcours />
            <Pourquoi />
        </Layout>
    )
}