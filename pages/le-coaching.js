import Layout from '../components/layout';
import WhatIsCoaching from '../sections/main/what-is-coaching';
import AccompagnementQualite from '../sections/main/accompagnement-qualite';
import CommentCaMarche from '../sections/main/comment-ca-marche';
import Contact from '../sections/contact';

export default function LeCoaching() {
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
        <Layout title="Le coaching" onThisPage={onThisPage}>
            <WhatIsCoaching />
            <AccompagnementQualite />
            <CommentCaMarche />
            <Contact />
        </Layout>
    )
}