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

function isSubsequenceRecursive(str1, str2) {
    if (str1.length === 0) return true
    if (str2.length === 0) return false
    if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
    return isSubsequence(str1, str2.slice(1))
}


a = isSubsequenceRecursive('sing', 'sting')
console.log(a)