import Logo from "./logo"

Headline.defaultProps = {
    props: {
        pretitle: "Coaching",
        title: "Un pas de plus",
        subtitle: "Pour un changement profond et durable"
    }
}

export default function Headline({ props, foot }) {
    return (
        <div className="container relative z-20">
            <div className="justify-center row">
                <div className="w-full lg:w-5/6 xl:w-2/3">
                    <div className="py-24 md:py-48 text-center header-content uppercase">
                        <div className="w-full flex justify-center">
                            {foot && <Logo />}
                        </div>
                        <h3 className="mb-5 text-3xl font-semibold leading-tight text-primary-900 md:text-5xl">
                            <small>{props.pretitle}</small>
                            <br />
                            <span className="bold text-tertary-900">{props.title}</span>
                        </h3>
                        <p className="px-5 mb-10 text-xl text-gray-700">{props.subtitle}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

