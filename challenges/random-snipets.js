function averagePair(arr, avg) {
    for (let i = 0, j = arr.length - 1; i < j;) {
        const avgCalc = arr[i] + arr[j] / 2
        if (avgCalc === avg) {
            return true
        } else if (avgCalc > avg) {
            j--
        } else {
            i++
        }
    }
    return false
}

function isSubsequence(a, b) {
    const strFrequency = (str) => {
        return [...str].reduce((p, char) => {
            p[char] = ++p[char] || 1
            return p
        }, {})
    }

    const aFrequency = strFrequency(a)
    const bFrequency = strFrequency(b)

    for (let char in aFrequency) {
        if (aFrequency[char] !== bFrequency[char]) {
            return false
        }
    }

    return true
}

console.log(isSubsequence('hello', 'hello world'))