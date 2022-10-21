import Layout from '../components/layout';
import Contact from '../sections/contact';

import Outdoor from '../public/images/outdoor.jpg';

export default function Bio() {
    const background = {
        img: Outdoor
    }

    const props = {
        title: "Coaching outdoor"
    }

    return (
        <Layout title="Coaching Outdoor" props={props} background={background}>
            <Contact />
        </Layout>
    )
}