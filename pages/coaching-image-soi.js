import Layout from '../components/layout';
import Steps from '../sections/steps';
import Contact from '../sections/contact';

import SelfEstime from '../public/images/self_estime.jpeg';

export default function Selfestime() {
    const background = {
        img: SelfEstime
    }

    const props = {
        title: "Coaching de l'image du corps à l'image de soi"
    }

    return (
        <Layout title="Coaching Image de soi" props={props} background={background} foot={false}>
            <Steps />
            <Contact />
        </Layout>
    )
}