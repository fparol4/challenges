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
 * @param {array} arr 
 */

const countManyUniqueValuesInArray = (arr) => {
    let i, j
    for (i = 0, j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
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
    let i, j
    for (i = 0, j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            arr[++i] = arr[j]
        }
    }
    return arr.slice(0, i + 1)
}

module.exports = {
    countManyUniqueValuesInArray,
    uniqueValuesInArray
}