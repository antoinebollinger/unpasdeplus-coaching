import EmblaCarousel from '../components/Slider/EmblaCarousel'
import Header from '../components/header';

import media1 from "../public/caroussel/1.webp";
import media2 from "../public/caroussel/2.webp";
import media3 from "../public/caroussel/3.webp";
import media4 from "../public/caroussel/4.webp";

export default function Slider({ id }) {
    const slides = [
        Object.assign(media1, { title: 'Changement & transition', content: 'Vers un pas de plus vers la quête de soi pour une vie harmonieuse' }),
        Object.assign(media2, { title: 'Image de soi', content: 'Développer & cultiver de la bienveillance envers soi' }),
        Object.assign(media3, { title: 'Communication & relationnel', content: ' Oser s’affirmer par la parole' }),
        Object.assign(media4, { title: 'Evolution sur les choix professionnels', content: 'Gagner en sérénité en étant aligné avec ses valeurs, son identité, sa personnalité, ses besoins, ses aspirations…' })
    ];

    return (
        <header id={id}>
            <EmblaCarousel slides={slides} className="text-white overflow-hidden">
                <div className="absolute inset-0 z-20 flex justify-center items-center pointer-events-none	">
                    <Header />
                </div>
            </EmblaCarousel>
        </header>
    )
}