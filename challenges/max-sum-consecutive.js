/**
 * @definition
 * Max consecutive sum from an array
 * [1, 5, 7, 3, 5, 9], 3 -> 3 + 5 + 9 =  17
 * 
 * @algorithm
 * - sum all the first numbers on the n position - 0 -> (3 - 1)
 * - alocate the temporary sum as the maxSum 
 * - start another iteration in `n` position, sum with the temporary value 
 * and subtract the value of `n` subtracted from the current `i` position 
 * n = 2; i = 3 -> arr[i] + temporary - arr[i - n]
 * 
 * 
 * @requires
 * - Solve in O(n)
 */

const maxSumConsecutive = (arr, n) => {
    if (n > arr.length) {
        return undefined
    }

    let maxSum = 0

    for (let i = 0; i < n; i++) {
        maxSum += arr[i]
    }

    let tempSum = maxSum
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum + arr[i] - arr[i - n]
        maxSum = Math.max(tempSum, maxSum)
    }

    return maxSum
}

module.exports = maxSumConsecutive