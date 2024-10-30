export interface Blog {
    id: string
}

export interface Images {
    url: string
}

export interface Author {
    id: string
    displayName: string
    url: string
    image: {
        url: string
    }
}

export interface Replies {
    totalItems: string
    selfLink: string
}

export interface Location {
    name: string
    lat: number
    lng: number
    span: string
}