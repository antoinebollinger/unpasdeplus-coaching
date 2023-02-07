import Layout from '../components/layout';
import Contact from '../sections/contact';

import ParticulierIllustration from '../public/images/particulier.jpg';

export default function OffresParticulier() {
    const background = {
        img: ParticulierIllustration
    }

    const props = {
        title: "Pour les particuliers",
        pretitle: "Mes accompagnements"
    }

    return (
        <Layout title="Offres Particulier" props={props} background={background}>
            <Contact />
        </Layout>
    )
}