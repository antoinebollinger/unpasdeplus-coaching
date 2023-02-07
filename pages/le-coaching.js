import Layout from '../components/layout';
import WhatIsCoaching from '../sections/main/what-is-coaching';
import AccompagnementQualite from '../sections/main/accompagnement-qualite';
import CommentCaMarche from '../sections/main/comment-ca-marche';
import Contact from '../sections/contact';

import CoachingIllustration from '../public/images/coaching.jpeg';

export default function LeCoaching() {
    const background = {
        img: CoachingIllustration
    }

    const onThisPage = [
        {
            title: "C'est quoi, le coaching ?",
            link: "#intro"
        },
        {
            title: "Comment ça se passe ?",
            link: "#how"
        }
    ]
    return (
        <Layout title="Le coaching" background={background} onThisPage={onThisPage}>
            <WhatIsCoaching />
            <AccompagnementQualite />
            <CommentCaMarche />
            <Contact />
        </Layout>
    )
}