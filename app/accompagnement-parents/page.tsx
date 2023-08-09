import Layout from '../../src/layout'
import Intro from '../../src/sections/parents/intro'
import Banner from '/public/images/banners/parents.webp'
import { siteData } from '../../src/data/metadata'

export const metadata = {
    title: `Accompagnement parents | ${siteData.title}`
}

export default function Page() {
    const headerProps = {
        title: 'Accompagnement des parents',
    }

    return (
        <Layout banner={Banner} headerProps={headerProps}>
            <Intro />
        </Layout >
    )
}