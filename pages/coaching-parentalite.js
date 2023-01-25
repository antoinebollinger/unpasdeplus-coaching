import Layout from '../components/layout';
import Parentalite from '../sections/coachings/parentalite';
import How from '../sections/main/how';
import Steps from '../sections/coachings/steps';
import Contact from '../sections/contact';

import ParentaliteImg from '../public/images/parents.jpg';

export default function Parents() {
    const background = {
        img: ParentaliteImg
    }

    const props = {
        title: "Coaching Parentalité"
    }

    return (
        <Layout title="Coaching Parentalité" props={props} background={background} foot={false}>
            <Parentalite />
            <How />
            <Steps />
            <Contact />
        </Layout>
    )
}