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
    const headerProps = {
        pretitle: 'Envie de me connaitre un peu mieux ?'
    }

    const outroText = "En tant que <strong>coach</strong>, j’accompagne aujourd'hui les personnes à faire <strong>UN PAS DE PLUS</strong> dans leur <strong>épanouissement personnel et/ou professionnel</strong> pour un changement profond & durable&nbsp;!"

    return (
        <Layout headerProps={headerProps} banner={Banner}>
            <Parcours />
            <Pourquoi />
            <Bio />
        </Layout>
    )
}