const stringFrequencyAlgorithm = require('../../algorithms/string-frequency.algorithm')

/**
 * First non repeating character
 */

const firstNotRepeat = (str) => {
    const charFrequency = stringFrequencyAlgorithm(str)
    for (let char in charFrequency) {
        if (charFrequency[char] === 1) {
            return char
        }
    }
    return -1
}

module.exports = firstNotRepeat