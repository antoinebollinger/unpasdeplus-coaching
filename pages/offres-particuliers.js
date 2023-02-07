import Layout from '../components/layout';
import Parentalite from '../sections/offres-particuliers/parentalite';
import MieuxEtre from '../sections/offres-particuliers/mieux-etre';
import Outdoor from '../sections/offres-particuliers/outdoor';
import Steps from '../sections/steps';
import Contact from '../sections/contact';

import ParticuliersIllustration from '../public/images/particuliers.jpg';

export default function OffresParticuliers() {
    const background = {
        img: ParticuliersIllustration
    }

    const props = {
        title: "Pour les particuliers",
        pretitle: "Mes accompagnements"
    }

    const onThisPage = [
        {
            title: "Parents",
            link: "#parentalite"
        },
        {
            title: "De l'image du corps à l'image de soi",
            link: "#mieux-etre"
        },
        {
            title: "Coaching Outdoor",
            link: "#outdoor"
        }
    ]

    return (
        <Layout title="Offres Particuliers" props={props} background={background} onThisPage={onThisPage}>
            <Parentalite />
            <MieuxEtre />
            <Outdoor />
            <Steps />
            <Contact />
        </Layout>
    )
}