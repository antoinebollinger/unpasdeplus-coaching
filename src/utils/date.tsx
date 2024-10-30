export function displayDate(dateStr: string) {
    const date = new Date(dateStr)
    const readableDate: string = date.toLocaleString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })
    return readableDate
}