function countValleys(steps, path) {
    let seaLevel = 0;
    let totalValleys = 0;
    const seaLevelByValleyOrMountain = (pathCurrent, lastPathSequence) => {
        return (pathCurrent === lastPathSequence)
    }
    const checkSeaLevel = (step) => {
        const total = step === "U" ? ++seaLevel : --seaLevel
        return total === 0
    }
    for (let step of [...path]) {
        if (checkSeaLevel(step) && seaLevelByValleyOrMountain(step, "U")) {
            totalValleys++
        }
    }
    return totalValleys;
}

console.log(countValleys(12, 'DDUUDDUDUUUD'))
