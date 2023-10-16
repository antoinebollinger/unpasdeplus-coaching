import Link from 'next/link'
import Layout from '../src/layout'
// import { siteData } from '../src/data/metadata'

// export const metadata = {
//     title: `Erreur 404 | ${siteData.title}`,
// }

export default function NotFound() {
    return (
        <Layout footer={false}>
            <div className="min-h-[35vh] flex justify-center items-center flex-col gap-6">
                <div>
                    <h1 className="h2">Oups, nous ne trouvons pas la page recherchée.</h1>
                    <p>Vérifiez que l'URL saisie ne contient pas d'erreur.</p>
                </div>
                <Link href="/" className="main-btn gradient-btn focus:outline-none uppercase">
                    Aller à la page d'accueil
                </Link>
            </div>
        </Layout>
    )
}