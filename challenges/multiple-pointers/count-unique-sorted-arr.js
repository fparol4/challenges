/**
 * @example
 * [1, 2, 2, 3, 5, 8] -> 5
 * 
 * @explanation 
 * 
 * Init i = 0, j = 1; 
 * If arr[i] == arr[j] then increase i 
 * 
 *  i
 * [1, 2, 2, 3, 5, 8]
 *     j 
 * 
 *     i                     i
 * [1, 2, 2, 3, 5, 8] -> [1, 3, 2, 3, 5, 8]
 *           j                     j
 *  i
 * [1] -> 1
 *  j 
 * 
 *  i
 * []
 * @param {array} arr 
 */

const countManyUniqueValuesInArray = (arr) => {
    if (!arr.length) {
        return 0
    }

    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            arr[++i] = arr[j]
        }
    }

    return i + 1
}

/**
 * @explanation
 * 
 * Same above, but on i increments whe take the arr[j] value into arr[i]; 
 * arr[i] = arr[j]
 * then splice for 0 to i and return a new array
 * 
 * @param {array} arr 
 */

const uniqueValuesInArray = (arr) => {
    if (!arr.length) {
        return 0
    }

    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            arr[++i] = arr[j]
        }
    }

    return arr.slice(0, i + 1)
}

console.log(countManyUniqueValuesInArray([]))

module.exports = {
    countManyUniqueValuesInArray,
    uniqueValuesInArray
}