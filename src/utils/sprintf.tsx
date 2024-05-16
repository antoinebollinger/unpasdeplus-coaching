String.prototype.sprintf = function (args: string[]) {
    return this.replace(/{(\d+)}/g, function (match: string, number: number) {
        return typeof args[number] != "undefined" ? args[number] : match
    })
}

export { }