import Layout from '../components/layout';
import LegalsSection from '../sections/legals';
import Contact from '../sections/contact';

import legals from '../public/images/legals.jpg';

export default function Legals() {
    const background = {
        img: legals
    }

    const props = {
        title: "Mentions légales"
    }

    return (
        <Layout title="Mentions légales" props={props} background={background}>
            <LegalsSection />
            <Contact />
        </Layout>
    )
}