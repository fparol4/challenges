// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, cb) {
    if (!arr.length) return false
    const [first, ...remaining] = arr
    const cbResult = cb(first)
    if (cbResult) return true
    return someRecursive(remaining, cb)
}

const r = someRecursive([3, 1, 2], (x) => x % 2 === 0)
console.log(r)