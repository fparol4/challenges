const capitalize = (str) => str[0].toUpperCase() + str.slice(1)

function capitalizeFirst(arr) {
    if (!arr.length) return [];
    const [first, ...remaining] = arr
    return [capitalize(first)].concat(capitalizeFirst(remaining))
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

console.log(capitalizeFirst(['carro', 'banana']))