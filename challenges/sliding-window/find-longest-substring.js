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


const longestSubstringNaive = (str) => {
    let longestSubstring = 0;
    let currentCount = 0;
    let lastCharPostions = {}
    let lastCharPosition

    for (let i = 0; i < str.length; i++) {
        lastCharPosition = lastCharPostions[str[i]]

        if (lastCharPosition !== undefined) {
            longestSubstring = Math.max(currentCount, longestSubstring)
            i = lastCharPosition
            currentCount = 0
            lastCharPostions = {}
        } else {
            currentCount++
            lastCharPostions[str[i]] = i
        }
    }

    return Math.max(longestSubstring, currentCount)
}

const longestSubstring = (str) => {
    let [max, start, track, char] = [0, 0, {}, undefined]
    for (let i = 0; i < str.length; i++) {
        char = str[i]

        if (track[char] >= start) {
            max = Math.max(max, i - start)
            start = track[char] + 1
        }

        track[str[i]] = i
    }

    return Math.max(max, str.length - start)
}

module.exports = longestSubstring