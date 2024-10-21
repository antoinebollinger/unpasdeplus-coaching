export default async function customFetch(url: string = "") {
    const res = await fetch(url, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GOOGLE_TOKEN}`
        }
    })
    if (!res.ok) return []
    const data = await res.json()
    return data
}