import type { headerProps } from '../models/types'

export default function Headline({
    pretitle = false,
    title = false,
    subtitle = false
}:
    headerProps
) {
    return (
        <div className="container">
            <div className="justify-center row">
                <div className="w-full lg:w-5/6 xl:w-2/3">
                    <div className="h-full text-center header-content uppercase">
                        {title && <h1 className="pb-5 text-3xl font-bold leading-tight text-secondary-200 md:text-5xl">{title}</h1>}
                        {pretitle && <h2 className="text-2xl font-semibold leading-tight text-secondary-50 md:text-4xl">{pretitle}</h2>}
                        {subtitle && <p className="px-5 text-xl text-gray-700">{subtitle}</p>}
                    </div>
                </div>
            </div>
        </div >
    )
}