import Layout from '../components/layout';
import WhatIsCoaching from '../sections/le-coaching/le-coaching-cest-quoi';
import AccompagnementQualite from '../sections/le-coaching/accompagnement-qualite';
import CommentCaMarche from '../sections/le-coaching/comment-ca-marche';
import Contact from '../sections/contact';

import CoachingIllustration from '../public/images/coaching.jpeg';

export default function LeCoaching() {
    const background = {
        img: CoachingIllustration
    }

    const onThisPage = [
        {
            title: "C'est quoi, le coaching ?",
            link: "#le-coaching-cest-quoi"
        },
        {
            title: "Un accompagnement de qualité",
            link: "#un-accompagnement-de-qualite"
        },
        {
            title: "Comment ça se passe ?",
            link: "#comment-ca-marche"
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