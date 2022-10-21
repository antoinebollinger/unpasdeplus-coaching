import Layout from '../components/layout';
import Contact from '../sections/contact';

export default function Bio() {
    const props = {
        title: "Qui je suis",
        subtitle: "Envie de me connaitre un peu ?"
    }

    return (
        <Layout title="Ma bio" props={props}>
            <Contact />
        </Layout>
    )
}