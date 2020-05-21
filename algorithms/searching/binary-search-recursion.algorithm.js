const binarySearch = (sortedArr, value = null) => {
    if (sortedArr.length === 1) {
        return (sortedArr[0] === value) ? 0 : -1
    }

    const middleIndex = Math.floor(sortedArr.length / 2)
    const middleValue = sortedArr[middleIndex]

    if (middleValue === value) {
        return middleIndex
    } else if (middleValue > value) {
        return binarySearch(sortedArr.slice(0, middleIndex), value)
    }

    const searchResult = binarySearch(sortedArr.slice(middleIndex + 1), value)
    return (searchResult !== 1) ? 1 + middleIndex + searchResult : -1
}

r = binarySearch([-1, 0, 3, 5, 9, 12], 9)
console.log(r)
module.exports = binarySearch