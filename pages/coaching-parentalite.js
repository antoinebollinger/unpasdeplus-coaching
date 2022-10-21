import Layout from '../components/layout';
import Contact from '../sections/contact';

import Parentalite from '../public/images/parents.jpg';

export default function Parents() {
    const background = {
        img: Parentalite
    }

    const props = {
        title: "Coaching de la parentalité"
    }

    return (
        <Layout title="Coaching Parentalité" props={props} background={background}>
            <Contact />
        </Layout>
    )
}