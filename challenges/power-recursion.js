const power = (num, pow) => {
    if (pow === 0) return 1
    if (pow === 1) return num
    return num * power(num, --pow)
}

const r = power(3, 0)
console.log(r)