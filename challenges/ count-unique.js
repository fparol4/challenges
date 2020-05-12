/**
 * Count unique values in a sorted array - lower -> higher 
 * using two pointers 
 * @examples
 * [1, 2, 2, 3, 4, 4] -> 2 
 */

const uniqueValuesInSortedArray = (arr) => {
    let uniqueValues = 0
    for (let i = 0, j = 1; j < arr.length; i++, j++) {
        if (arr[i] === arr[j]) {
            uniqueValues++
        }
    }
    return uniqueValues
}

console.log(uniqueValuesInSortedArray([-1, 2, 3, 6, 6]))