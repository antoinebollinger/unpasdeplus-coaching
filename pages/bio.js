import Layout from '../components/layout';
import Contact from '../sections/contact';

import AboutImg from '../public/images/about.jpg';
import LongBio from '../sections/longbio';

export default function Bio() {
    const background = {
        img: AboutImg
    }

    const props = {
        title: "Qui je suis",
        subtitle: "Envie de me connaitre un peu ?"
    }

    return (
        <Layout title="Ma bio" props={props} background={background} foot={false}>
            <LongBio />
            <Contact />
        </Layout>
    )
}