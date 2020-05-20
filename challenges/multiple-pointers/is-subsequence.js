/**
 * @explanation 
 * Find if two strings are subsequences of another
 * 
 * @examples
 * 'hello', 'hkello world' 
 */


function isSubsequence(a, b) {
    for (let i = 0, j = 0; i < a.length;) {
        if (!b[j]) {
            return false
        }

        if (a[i] === b[j]) {
            i++
        }

        j++
    }
    return true
}

a = isSubsequenceRecursive('sing', 'sting')
console.log(a)