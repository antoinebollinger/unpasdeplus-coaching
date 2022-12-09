import Layout from '../components/layout';
import MieuxEtre from '../sections/coachings/mieux-etre';
import Steps from '../sections/coachings/steps';
import Contact from '../sections/contact';

import SelfEstime from '../public/images/self_estime.jpeg';

export default function Selfestime() {
    const background = {
        img: SelfEstime
    }

    const props = {
        title: "Coaching mieux-être"
    }

    return (
        <Layout title="Coaching Image de soi" props={props} background={background} foot={false}>
            <MieuxEtre />
            {/* <Steps /> */}
            <Contact />
        </Layout>
    )
}