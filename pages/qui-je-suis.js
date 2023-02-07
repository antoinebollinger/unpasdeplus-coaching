import Layout from '../components/layout';
import Intro from '../sections/qui-je-suis/intro';
import MonParcours from '../sections/qui-je-suis/mon-parcours';
import Outro from '../sections/qui-je-suis/outro';
import Contact from '../sections/contact';

import QuiJeSuisIllustration from '../public/images/quijesuis_purple.jpg';

export default function QuiJeSuis() {
    const background = {
        img: QuiJeSuisIllustration
    }

    const props = {
        title: "Qui je suis",
        pretitle: "Envie de me connaitre un peu ?"
    }

    return (
        <Layout title="Qui je suis" props={props} background={background}>
            <Intro />
            <MonParcours />
            <Outro />
            <Contact />
        </Layout>
    )
}