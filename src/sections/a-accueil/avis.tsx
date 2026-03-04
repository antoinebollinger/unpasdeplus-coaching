"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import Reviews from "../../utils/reviews"
import { reviews } from "../../data/reviews"

export default function Avis({ className = "bg-gray-100" }: { className?: string }) {
    return (
        <section id="avis" className={className}>
            <div className="container">
                <div className="text-center pb-10">
                    <p className="text-xl leading-6 text-start lg:text-center mb-2">
                        Découvrez comment mes coaché·es ont retrouvé énergie, sérénité et équilibre grâce au coaching !
                        <br />
                        <br />
                        <span className="text-yellow-400">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                    </p>
                    <p><i>Source : {reviews.length} avis sur <Link href="https://www.google.com/search?sca_esv=ad335200c38ab265&sxsrf=ANbL-n78dly11Qto4Ya1SPu1pk2WhSoEXg:1771847021111&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOX97miUa-WP1y5ITHLV4uyt4awPnHVxi-fEkIoHHVFtO3ucXA0vE2XbL9us6mcssyXYsYMiwWCMHtAR0cPn3TzQ5CuzOvdrZ-KBGoazh9twS_GCcWw0E9f5yqOWzicwg_0AoEBM%3D&q=Un+Pas+de+Plus+coaching-+Sabrina+Appriou+Avis&sa=X&ved=2ahUKEwiUmKjCxO-SAxU6S_EDHYKbE_cQ0bkNegQIShAH&biw=1920&bih=911&dpr=1" className="text-primary-600 hover::underline" target="_blank">Google Avis</Link> </i></p>
                </div>
                <div className="relative bg-gray-200 rounded-xl p-6">
                    <Reviews reviews={reviews} />
                </div>
            </div>
        </section>
    )
}