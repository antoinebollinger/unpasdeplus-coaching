import Layout from '../../src/layout'
import Bio from '../../src/sections/bio'
import Break from '../../src/components/break'
import Contact from '../../src/components/contact'
import Banner from '/public/images/banners/quijesuis-intro.webp'
import QuijesuisOutro from '/public/images/banners/quijesuis-outro.webp'
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
            <Bio />
            <Break banner={QuijesuisOutro} text={outroText} textStyle="text-start text-xl md:text-3xl my-4 text-primary-100 w-1/2" last="grey" />
            <Contact />
        </Layout>
    )
}