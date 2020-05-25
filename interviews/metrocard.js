function metroCard(lastNumbersOfDays) {

    const months = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30]

    const days = {}

    months.forEach((elem, index, array) => {
        if (elem === lastNumbersOfDays) {
            const mod = (index + 1) % 12
            days[mod] = months[mod]
        }
    })

    const monthsPayments = Object.keys(days)
    const daysPayments = Object.values(days)

    return Object
        .keys(days)
        .map(item => parseInt(item))
        .sort((a, b) => a - b)
}

console.log(metroCard(31))
