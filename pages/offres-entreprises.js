import Layout from '../components/layout';
import Contact from '../sections/contact';

import EntrepriseIllustration from '../public/images/entreprises.jpg';

export default function OffresEntreprises() {
    const background = {
        img: EntrepriseIllustration
    }

    const props = {
        title: "Pour les entreprises",
        pretitle: "Mes accompagnements"
    }

    return (
        <Layout title="Offres Entreprises" props={props} background={background}>
            <Contact />
        </Layout>
    )
}