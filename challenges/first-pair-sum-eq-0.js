/**
 * @description
 * First pair of an array who sums equals 0 
 * The array is sorted from the lower to the higher 
 * 
 * 
 * @example [-3, -2, 0, 2, 4] -> 2
 */

/**
 * Duas coisas que aprendi hoje, 
 * - Exemplo da utilização de dois ponteiros em um array (left, right -> left < right)
 * - Controle dos valores de um for loop dentro dele passando `;` 
 */

const firstPair = (arr) => {
    for (let left = 0, right = arr.length - 1; left < right;) {
        const sum = arr[left] + arr[right]
        if (!sum) {
            return Math.abs(arr[left])
        } else if (sum < 0) {
            left++
        } else {
            right--
        }
    }
}

module.exports = firstPair