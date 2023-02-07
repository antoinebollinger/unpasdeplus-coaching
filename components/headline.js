import Logo from "./logo"

Headline.defaultProps = {
    props: {
        pretitle: false,
        title: false,
        subtitle: false
    }
}

export default function Headline({ props, logo }) {
    return (
        <div className="container ">
            <div className="justify-center row">
                <div className="w-full lg:w-5/6 xl:w-2/3">
                    <div className="h-full text-center header-content uppercase">
                        {logo && <div className="h-full w-full flex justify-center"><Logo /></div>}
                        {props.pretitle && <h4 className="text-2xl font-semibold leading-tight text-primary-100 md:text-4xl">{props.pretitle}</h4>}
                        {props.title && <h3 className="text-3xl font-bold leading-tight text-tertary-900 md:text-5xl">{props.title}</h3>}
                        {props.subtitle && <p className="px-5 text-xl text-gray-700">{props.subtitle}</p>}
                    </div>
                </div>
            </div>
        </div >
    )
}

