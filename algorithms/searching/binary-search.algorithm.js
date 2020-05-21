const binaryNumbersSearch = (sortedArr, value) => {
    if (!sortedArr.length) {
        return -1
    }
    const middleIndex = Math.floor(sortedArr.length / 2)
    const middleValue = sortedArr[middleIndex]

    if (middleValue === value) {
        return middleIndex
    } else if (middleValue > value) {
        return binaryNumbersSearch(sortedArr.slice(0, middleIndex), value)
    }

    const searchResult = binaryNumbersSearch(sortedArr.slice(middleIndex + 1), value)
    return searchResult !== -1 ? middleIndex + 1 + searchResult : -1
}

const r = binaryNumbersSearch([10, 20, 30, 50, 55], 56)
module.exports = binaryNumbersSearch