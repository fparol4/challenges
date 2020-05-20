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

    return middleValue + binaryNumbersSearch(sortedArr.slice(middleIndex + 1), value)

}

const r = binaryNumbersSearch([1, 2, 3, 4, 5], 5)

module.exports = binaryNumbersSearch