import Layout from '../components/layout'
import Slider from '../sections/slider'
import Intro from '../components/intro'
import Coaching from '../sections/coaching'
import Programs from '../sections/programs'
import About from '../sections/about'
import Outro from '../components/outro'
import Contact from '../sections/contact'

import { getData } from "../lib/getData"
import { useEffect } from 'react'

export async function getServerSideProps() {
    const coachingData = await getData('coaching');
    return {
        props: {
            coachingData,
        },
    };
}

export default function Home({ coachingData }) {
    useEffect(() => {

    });

    return (
        <Layout home={true}>
            <Slider id="home" />
            <Intro />
            <Coaching coachingData={coachingData} />
            <Programs />
            <About />
            <Outro />
            <Contact />
        </Layout>
    )
}