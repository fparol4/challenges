/**
 * Solve the verifyAnagram using the frequency pattern
 */

const verifyAnagram = (word, anagram) => {
    if (word.length !== anagram.length) {
        return false
    }

    const strFrequency = (str) => {
        return [...str].reduce((p, char) => {
            const charLowerCase = char.toLowerCase()
            p[charLowerCase] = p[charLowerCase] ? ++p[charLowerCase] : 1
            return p
        }, {})
    }

    const wordFrequency = strFrequency(word)
    const anagramFrequency = strFrequency(anagram)

    for (char in wordFrequency) {
        if (wordFrequency[char] !== anagramFrequency[char]) {
            return false
        }
    }

    return true
}

const r = verifyAnagram('', '')
console.log(r)