import Layout from '../components/layout';
import Contact from '../sections/contact';

import ParticulierIllustration from '../public/images/particulier.jpg';

export default function OffresParticulier() {
    const background = {
        img: ParticulierIllustration
    }

    return (
        <Layout title="Offres Particulier" background={background}>
            <Contact />
        </Layout>
    )
}