const reverse = (str) => {
    if (!str.length) return str
    return str.slice(-1) + reverse(str.slice(0, str.length - 1))
}

module.exports = reverse