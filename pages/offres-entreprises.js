import Layout from '../components/layout';
import Entreprises from '../sections/offres-entreprises/entreprises';
import Contact from '../sections/contact';

import EntrepriseIllustration from '../public/images/banners/entreprises.jpg';

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
            <Entreprises />
            <Contact />
        </Layout>
    )
}