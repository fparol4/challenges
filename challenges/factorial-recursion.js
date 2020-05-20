function factorial(n) {
    if (n === 0) return 1
    return n * factorial(--n)
}

console.log(factorial(4))