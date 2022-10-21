import Image from 'next/image';
import StepsImg from '../public/images/steps.jpg';

export default function Steps() {
    return (
        <section className="relative services-area">
            <div className="py-120">
                <div className="container">
                    <div className="justify-center row">
                        <div className="w-full mx-4 lg:w-1/2">
                            <div className="pb-10 text-center section-title">
                                <h4 className="title">5 étapes clés du parcours d'accompagement</h4>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-col sm:flex-row justify-center">
                        <div className="w-1/2 md:w-1/3 md:pr-6 mx-auto">
                            <Image
                                src={StepsImg}
                                className="w-full"
                                alt="Steps"
                            />
                        </div>
                        <div className="w-full md:w-2/3 md:pl-6">
                            <p className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Introspection
                            </p>
                            <p className="text-gray-600 mb-8">
                                On part de vous ! Comprendre son fonctionnement, ses schémas de pensées, ses freins actuels, ses blocages.
                            </p>
                            <p className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Exploration
                            </p>
                            <p className="text-gray-600 mb-8">
                                Clarifier l'objectif aligné à votre identité, votre personnalité.
                            </p>
                            <p className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Validation
                            </p>
                            <p className="text-gray-600 mb-8">
                                Validation de l'objectif
                            </p>
                            <p className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Validation
                            </p>
                            <p className="text-gray-600 mb-8">
                                Validation de l'objectif
                            </p>
                            <p className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Plan d'action
                            </p>
                            <p className="text-gray-600 mb-8">
                                Accompagnement vers la mise en mouvement
                            </p>
                            <p className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Autonomie
                            </p>
                            <p className="text-gray-600 mb-8">
                                Développer son mindset, un état d'esprit vers le mieux-être pour voir l'avenir en toute sérénité.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}