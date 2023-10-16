import Link from 'next/link'
import Layout from '../src/layout'

export default function NotFound() {
    return (
        <Layout footer={false}>
            <div className="min-h-[35vh] flex justify-center items-center">
                <div>
                    <h2>Oups</h2>
                    <p>La page à laquelle vous souhaitez accéder n'a pas été trouvée.</p>
                    <Link href="/">Revenir à la page d'accueil</Link>
                </div>
            </div>
        </Layout>
    )
}