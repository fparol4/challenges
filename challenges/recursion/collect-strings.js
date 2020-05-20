const collectStrings = (obj) => {
    return Object.values(obj).reduce((p, value) => {
        if (typeof value === 'string') {
            p.push(value)
        } else {
            p.push(...collectStrings(value))
        }
        return p
    }, [])
}

const ob = {
    a: 'a',
    b: 'b'
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj))

//collectStrings(obj) // ["foo", "bar", "baz"])