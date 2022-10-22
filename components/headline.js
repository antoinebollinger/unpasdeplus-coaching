Headline.defaultProps = {
    props: {
        title: '<small>Coaching</small><br/><span class="bold text-tertary-900">Un pas de plus</span>',
        subtitle: "Pour un changement profond et durable"
    }
}

export default function Headline({ props }) {
    const markup = () => {
        return { __html: props.title }
    }
    return (
        <div className="container relative z-20">
            <div className="justify-center row">
                <div className="w-full lg:w-5/6 xl:w-2/3">
                    <div className="pt-48 pb-64 text-center header-content uppercase">
                        <h3 className="mb-5 text-3xl font-semibold leading-tight text-primary-900 md:text-5xl" dangerouslySetInnerHTML={markup()} />
                        <p className="px-5 mb-10 text-xl text-gray-700">{props.subtitle}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

