import Layout from "../../../src/layout";

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <Layout>
            <section className="py-120">
                <div>My Post: {params.slug}</div>
            </section>
        </Layout>
    )

}