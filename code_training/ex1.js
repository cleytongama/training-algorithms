function metroCard(lastNumberOfDays) {
    const months = [
        31, //jan
        28, // fev
        31, //mar
        30, //apr
        31, //may
        30, //jun
        31, //jul
        31, //aug
        30, //set
        31, //oct
        30, //nov
        31 //dec
    ];

    let days = {};
    months.forEach((element, index) => {
        if (element === lastNumberOfDays) {
            days[months[(index + 1) % 12]] = 1
        }
    });

    return Object.keys(days).map((day) => parseInt(day)).sort((a, b) => b - a)
}

console.log(metroCard(31));

