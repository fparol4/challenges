function flatten(arr) {
    return arr.reduce((p, c) => {
        const f = (typeof c === 'object') ? flatten(c) : [c]
        p.push(...f)
        return p
    }, [])
}

console.log(
    flatten([
        1,
        2,
        3,
        [1, 2],
        [1],
        [
            [2]
        ]
    ]))
// add whatever parameters you deem necessary - good luck!

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3