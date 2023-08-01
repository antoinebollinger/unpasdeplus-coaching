import { Roboto, Urbanist, Amatic_SC } from "next/font/google"

export const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-roboto',
})

export const urbanist = Urbanist({
    subsets: ['latin'],
    variable: '--font-urbanist',
})

export const amatic = Amatic_SC({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-amatic'
})