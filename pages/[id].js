import Intro from "../components/intro";
import Layout from "../components/layout"
import Outro from "../components/outro";
import { getAllPostIds, getPostData } from '../lib/getData'

export async function getServerSideProps({ params }) {
    const postData = await getPostData(params.id, 'posts');
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds('posts');
    return {
        paths,
        fallback: false
    }
}

export default function Post({ postData }) {
    return (
        <Layout home={false} title={postData.title}>
            <Intro />
            <section className="bg-white">
                <div className="container px-8 mx-auto text-gray-800">
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                        {postData.title}
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div id="posts" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </div>
            </section>
            <Outro />
        </Layout >
    )
}