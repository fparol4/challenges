/**
 * Find the frequency of characters in a string
 * @param {string} str 
 * @returns {object} 
 */

const stringFrequencyAlgorithm = (str) => {
    const charFrequency = {}
    for (let char of str) {
        charFrequency[char] = ++charFrequency[char] || 1
    }
    return charFrequency
}

module.exports = stringFrequencyAlgorithm