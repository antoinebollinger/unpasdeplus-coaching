import Layout from '../components/layout';
import Intro from '../sections/about/intro';
import Career from '../sections/about/career';
import Outro from '../sections/about/outro';
import Contact from '../sections/contact';

import AboutImg from '../public/images/about.jpg';

export default function Bio() {
    const background = {
        img: AboutImg
    }

    const props = {
        title: "Qui je suis",
        pretitle: "Envie de me connaitre un peu ?"
    }

    return (
        <Layout title="Ma bio" props={props} background={background} foot={false}>
            <Intro />
            <Career />
            <Outro />
            <Contact />
        </Layout>
    )
}