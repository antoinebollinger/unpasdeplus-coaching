import Layout from '../components/layout';
import Contact from '../sections/contact';

import EntrepriseIllustration from '../public/images/entreprises.jpg';

export default function OffresEntreprises() {
    const background = {
        img: EntrepriseIllustration
    }

    return (
        <Layout title="Offres Entreprises" background={background}>
            <Contact />
        </Layout>
    )
}