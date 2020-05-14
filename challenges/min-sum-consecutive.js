/**
 * @definition
 * Min consecutive sum from an array who is smaller then the passed num
 * [1, 5, 7, 3, 5, 9], 3 -> 3 + 5 + 9 =  17
 */

/**
*  for (let i = 0, j = 0; i < arr.length;) {
       // console.log(sum)
       if (sum < num && j < arr.length) {
           console.log('aa')
           sum += arr[j++]
           continue
       } else if (i < j) {
           result = j
           sum -= arr[i++]
           console.log(sum, arr[i++])
       }
   }
*/

// const minSumConsecutive = (arr, num) => {
//     let sum = 0,
//         result = 0

//     for (let i = 0, j = 0; i < arr.length;) {
//         console.log('j', j, 'i', i, 'jV', arr[j], 'iV', arr[i], 'sum', sum, 'result', result)
//         if (j < arr.length) {
//             sum += arr[j++]
//         } else if (i < j) { //sum >= num
//             result = j - i
//             sum -= arr[i++]
//         }
//     }

//     console.log('sum', sum)
//     console.log('result', result)
//     return result + 1
// }



// minSumConsecutive([2, 0, 1], 3)

const minSumConsecutive = (arr, num) => {
    if (!arr.length) {
        return 0
    }

    let sum = 0,
        result

    for (let i = 0, j = 0; i < arr.length;) {
        if (j < arr.length) {
            console.log(sum)
            sum += arr[j++]
        } else if (sum >= num) {
            console.log(j)
            break
            result = j - i
            sum -= arr[i++]
        } else {
            break
        }

    }

    console.log(result)
    return result
}



minSumConsecutive([5, 1, 3, 5, 10, 7, 4, 9, 2, 8], 15)

module.exports = minSumConsecutive