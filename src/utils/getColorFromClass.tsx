function rgbToHex(rgb: string) {
    const [r, g, b] = rgb.match(/\d+/g).map(Number)
    return (
        '#' +
        ((1 << 24) + (r << 16) + (g << 8) + b)
            .toString(16)
            .slice(1)
            .toUpperCase()
    )
}

export function getHexColorFromClass(className: string) {
    if (typeof document === "undefined") return null
    const bgClassTmp = className?.match(/bg-[\w-]+/)
    const bgClass = bgClassTmp ? bgClassTmp[0] : "bg-white"
    const tempElement = document.createElement('div')
    tempElement.style.display = 'none'
    tempElement.className = bgClass
    document.body.appendChild(tempElement)
    const color = getComputedStyle(tempElement).backgroundColor
    document.body.removeChild(tempElement)
    return color.startsWith('rgb') ? rgbToHex(color) : color || null
}
