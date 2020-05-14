const firstPositionOfChars = (str: string) => {
    return str
        .split('')
        .reduce((p, char, i) => {
            p[char] = p[char] ?? i
            return p
        }, {})
}

console.log(firstPositionOfChars('abcccaa'))