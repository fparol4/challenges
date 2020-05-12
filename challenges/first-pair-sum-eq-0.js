/**
 * @description
 * First pair of an array who sums equals 0 
 * The array is sorted from the lower to the higher 
 * @example [-3, -2, 0, 2, 4] -> 2
 */

const firstPair = (arr) => {
    for (let i = 0, j = arr.length - 1; i < arr.length / 2 || j >= arr.length / 2; i++, j--) {
        if (!(arr[i] + arr[j])) {
            return arr[j]
        }
    }
    return false
}

console.log(firstPair([-3, -2, 0, 1, 2, 3]))