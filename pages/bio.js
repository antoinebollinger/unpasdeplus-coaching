import Layout from '../components/layout';
import Contact from '../sections/contact';

import AboutImg from '../public/images/about.jpg';

export default function Bio() {
    const background = {
        img: AboutImg
    }

    const props = {
        title: "Qui je suis",
        subtitle: "Envie de me connaitre un peu ?"
    }

    return (
        <Layout title="Ma bio" props={props} background={background}>
            <Contact />
        </Layout>
    )
}