export const reveal = (
    {
        collection,
        classesToRemove = [],
        classesToAdd = [],
        delayIncrement = 100
    }: {
        collection: NodeListOf<Element>,
        classesToRemove?: string[],
        classesToAdd?: string[],
        delayIncrement?: number
    }
) => {
    if (!collection) return
    let delay: number = 0
    const timelineObserver = new IntersectionObserver((entries, observer) => {
        if (entries.some(entry => entry.isIntersecting)) {
            entries.forEach(entry => {
                setTimeout(() => {
                    classesToRemove?.forEach(classe => entry.target.classList.remove(classe))
                    classesToAdd?.forEach(classe => entry.target.classList.add(classe))
                    observer.unobserve(entry.target)
                }, delay)
                delay += delayIncrement
            })
        }
    }, { root: null, threshold: 0.25 })
    collection.forEach(ele => timelineObserver.observe(ele))
}