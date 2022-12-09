import Layout from '../components/layout';
import Steps from '../sections/coachings/steps';
import Contact from '../sections/contact';

import Outdoor from '../public/images/outdoor.jpg';

export default function Bio() {
    const background = {
        img: Outdoor
    }

    const props = {
        title: "Coaching Outdoor"
    }

    return (
        <Layout title="Coaching Outdoor" props={props} background={background} foot={false}>
            {/* <Steps /> */}
            <Contact />
        </Layout>
    )
}