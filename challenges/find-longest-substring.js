/**
 * Find the longes substring in a provided str 
 * 
 * 
 * @examples 
 * 'abcd' -> 4 
 * 'aabc' -> 3 
 * '' -> 0 
 *
 * @params str: string
 * @return number
 */


const longestSubstring = (str) => {
    if (!str.length) {
        return 0
    }

    let longestSubstring = 0
    let currentSubstring = 0
    let currentLetterPositions = []

    for (let i = 0; i < str.length; i++) {
        if (currentLetterPositions[str[i]] !== undefined) {
            console.log('eq', str[i])
            currentLetterPositions = []
            currentSubstring = 1
        } else if (str[currentLetterPositions[currentLetterPositions.length - 1]] !== str[i]) {
            currentSubstring++
        }

        currentLetterPositions[str[i]] = i
        longestSubstring = Math.max(longestSubstring, currentSubstring)
    }

    return longestSubstring
}

const r = longestSubstring('dvdf')
console.log(r)