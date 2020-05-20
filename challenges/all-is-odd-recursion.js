const allIsOdd = (list) => {
    const [first, ...remaining] = list
    if (!first) {
        return true
    } else if (first % 2 === 0) {
        return false
    }
    return allIsOdd(remaining)
}

module.exports = allIsOdd