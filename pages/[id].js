import Head from "next/head"
import { useEffect } from "react";
import Intro from "../components/intro";
import Layout from "../components/layout"
import Outro from "../components/outro";
import { getAllPostIds, getPostData } from '../lib/posts'

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export default function Post({ postData }) {
    useEffect(() => {
        const images = Array.from(document.querySelectorAll('img'));
        images.forEach(img => {
            img.className = img.alt;
        });
    });

    return (
        <Layout home={false} title={postData.title}>
            <Intro className="" />
            <article className="pt-24 bg-white">
                <div className="container mx-auto lg:px-0 px-6 pt-4 pb-12 text-gray-800">
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                        {postData.title}
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div id="posts" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </div>
            </article>
            <Outro />
        </Layout >
    )
}