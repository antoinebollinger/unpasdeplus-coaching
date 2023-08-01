type headerProps = {
    pretitle?: boolean,
    title?: boolean,
    subtitle?: boolean
}
export default function Headline({ pretitle = false, title = false, subtitle = false }: headerProps) {

    return (
        <div className="container">
            <div className="justify-center row">
                <div className="w-full lg:w-5/6 xl:w-2/3">
                    <div className="h-full text-center header-content uppercase">
                        {pretitle && <h4 className="text-2xl font-semibold leading-tight text-primary-100 md:text-4xl">{pretitle}</h4>}
                        {title && <h3 className="text-3xl font-bold leading-tight text-tertary-900 md:text-5xl">{title}</h3>}
                        {subtitle && <p className="px-5 text-xl text-gray-700">{subtitle}</p>}
                    </div>
                </div>
            </div>
        </div >
    )
}

