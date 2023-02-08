import Layout from '../components/layout';
import Intro from '../sections/qui-je-suis/intro';
import MonParcours from '../sections/qui-je-suis/mon-parcours';
import Break from '../components/break';
import Contact from '../sections/contact';

import QuiJeSuisIntro from '../public/images/quijesuis_purple.jpg';
import QuijesuisOutro from "../public/images/quijesuis_outro_purple.jpg";

export default function QuiJeSuis() {
    const introBackground = {
        img: QuiJeSuisIntro
    }
    const outroBackground = {
        img: QuijesuisOutro
    }
    const props = {
        title: "Qui je suis",
        pretitle: "Envie de me connaitre un peu ?"
    }

    const outroText = "En tant que <strong>coach</strong>, j’accompagne aujourd'hui les personnes à faire <strong>UN PAS DE PLUS</strong> dans leur <strong>épanouissement personnel et/ou professionnel</strong> pour un changement profond & durable !"

    return (
        <Layout title="Qui je suis" props={props} background={introBackground}>
            <Intro />
            <MonParcours />
            <Break text={outroText} background={outroBackground} first="gray" last="gray" />
            <Contact />
        </Layout>
    )
}