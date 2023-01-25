import Layout from '../components/layout';
import MieuxEtre from '../sections/coachings/mieux-etre';
import How from '../sections/main/how';
import Steps from '../sections/coachings/steps';
import Contact from '../sections/contact';

import MieuxEtreImg from '../public/images/self_estime.jpeg';

export default function HowItWorks() {
    const background = {
        img: MieuxEtreImg
    }

    const props = {
        title: "Comment ça marche ?",
        pretitle: "Mais au fait..."
    }

    return (
        <Layout title="Comment ça marche ?" props={props} background={background} foot={false}>

            <How />
            <Steps />
            <Contact />
        </Layout>
    )
}