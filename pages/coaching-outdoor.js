import Layout from '../components/layout';
import Outdoor from '../sections/coachings/outdoor';
import Steps from '../sections/coachings/steps';
import Contact from '../sections/contact';

import OutdoorImg from '../public/images/outdoor.jpg';

export default function Bio() {
    const background = {
        img: OutdoorImg
    }

    const props = {
        title: "Coaching Outdoor"
    }

    return (
        <Layout title="Coaching Outdoor" props={props} background={background} foot={false}>
            <Outdoor />
            {/* <Steps /> */}
            <Contact />
        </Layout>
    )
}