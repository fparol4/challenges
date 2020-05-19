/**
 * @definition
 * Min consecutive sum from an array who is smaller then the passed num
 * [1, 5, 7, 3, 5, 9], 3 -> 3 + 5 + 9 =  17
 */

const minSumConsecutive = (arr, num) => {
    if (!arr.length) {
        return 0
    }

    let sum = 0,
        result = Infinity

    for (let i = 0, j = 0; i < arr.length;) {
        if (sum < num && j < arr.length) {
            sum += arr[j++]
        } else if (sum >= num) {
            result = Math.min(result, j - i)
            if (i !== j) {
                sum -= arr[i++]
            } else {
                i++
            }
        } else {
            break
        }

    }
    console.log(result)
    return result === Infinity ? 0 : result
}



minSumConsecutive([5, 1, 3, 5, 10, 7, 4, 9, 2, 8], 15)

module.exports = minSumConsecutive