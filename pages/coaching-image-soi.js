import Layout from '../components/layout';
import ImageSoi from '../sections/coachings/image-soi';
import Steps from '../sections/steps';
import Contact from '../sections/contact';

import SelfEstime from '../public/images/self_estime.jpeg';

export default function Selfestime() {
    const background = {
        img: SelfEstime
    }

    const props = {
        pretitle: "Coaching mieux-être",
        title: "De l'image du corps à l'image de soi"
    }

    return (
        <Layout title="Coaching Image de soi" props={props} background={background} foot={false}>
            <ImageSoi />
            {/* <Steps /> */}
            <Contact />
        </Layout>
    )
}