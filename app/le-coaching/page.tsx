import Layout from '../../src/layout'
import LeCoachingCestQuoi from '../../src/sections/le-coaching-cest-quoi'
import Steps from '../../src/sections/steps'
import CommentCaMarche from '../../src/sections/comment-ca-marche'
import Contact from '../../src/components/contact'
import Banner from '/public/images/banners/coaching.webp'
import { siteData } from '../../src/data/metadata'

export const metadata = {
    title: `Le coaching | ${siteData.title}`
}

export default function Page() {
    const onThisPage = [
        {
            title: 'C\'est quoi, le coaching?',
            link: '#le-coaching-cest-quoi'
        },
        {
            title: 'Un accompagnement de qualité',
            link: '#un-accompagnement-de-qualite'
        },
        {
            title: 'Comment ça se passe ?',
            link: '#comment-ca-marche'
        }
    ]

    return (
        <Layout banner={Banner} onThisPage={onThisPage}>
            <LeCoachingCestQuoi />
            <Steps />
            <CommentCaMarche />
            <Contact />
        </Layout>
    )
}