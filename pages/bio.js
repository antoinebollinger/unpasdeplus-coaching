import Layout from "../components/layout"

export default function Bio() {
    return (
        <Layout home={false} title={"Ma bio"}>
            <article className="pt-24 bg-white">
                <div className="container mx-auto lg:px-0 px-6 pt-4 pb-12 text-gray-800">
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                        Ma bio
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div className="flex flex-wrap flex-col sm:flex-row">
                        <div className="w-full w-1/2 mx-auto md:w-1/4 p-6 mt-6">
                            <img src="/images/sabrina.webp" className="w-full mx-auto rounded-full" />
                        </div>
                        <div className="w-full sm:w-3/4 p-6 mt-6">
                            <div className="align-middle">
                                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                    Sabrina Appriou
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    Fondatrice d'UN PAS DE PLUS - Coach certifiée Linkup Coaching
                                </p>
                                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                    Ma mission
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    J'accompagne les personnes à faire UN PAS DE PLUS pour un changement profond et durable dans leur vie personnelle et/ou professionnelle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Layout >
    )
}