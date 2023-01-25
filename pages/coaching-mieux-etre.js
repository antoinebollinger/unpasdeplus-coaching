import Layout from '../components/layout';
import MieuxEtre from '../sections/coachings/mieux-etre';
import Steps from '../sections/coachings/steps';
import Contact from '../sections/contact';

import MieuxEtreImg from '../public/images/self_estime.jpeg';

export default function Selfestime() {
    const background = {
        img: MieuxEtreImg
    }

    const props = {
        title: "Coaching Mieux-être",
        pretitle: "De l'image du corps à l'image de soi"
    }

    return (
        <Layout title="Coaching Image de soi" props={props} background={background} foot={false}>
            <MieuxEtre />
            {/* <Steps /> */}
            <Contact />
        </Layout>
    )
}