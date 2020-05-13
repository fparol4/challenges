/**
 * @definition
 * Max consecutive sum from an array
 * [1, 5, 7, 3, 5, 9], 3 -> 3 + 5 + 9 =  17
 * 
 * @algorithm
 * - sum all the first numbers on the n position - 0 -> (3 - 1)
 * - start another iteration in `n` position, sum with the max value 
 * and subtract the value of `n` subtracted from the current `i` position 
 * n = 2; i = 3 -> arr[i] + maxSum - arr[i - n]
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

    for (let i = n; i < arr.length; i++) {
        const sum = arr[i] - arr[i - n] + maxSum
        maxSum = sum > maxSum ? sum : maxSum
    }

    return maxSum
}

module.exports = maxSumConsecutive