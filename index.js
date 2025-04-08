const first = (array) => {
    return array[0]
}

const last = (array) => {
    return array[array.length - 1]
}

const middle = (array) => {
    return array [Math.floor((array.length - 1) / 2)]
}

const middleMean = (array) => {
    const stred = array[Math.floor((array.length - 1) / 2)]
    if (array.length === 0) {
        return
    } else if (array.length % 2 !== 0) {
        return stred
    }
    const stred2 = array[Math.ceil((array.length - 1) / 2)]
    return (stred + stred2) / 2
}

const insert = (array, hodnota) => {
    if (array.includes(hodnota)) {
        return false
    }
    array.push(hodnota)
    console.log(array)
    return true
}

console.log(first([3, 2, 1]));  // ⟶ 3
console.log(first([]));         // ⟶ undefined

console.log(last([3, 2, 1]));  // ⟶ 1
console.log(last([]));         // ⟶ undefined

console.log(middle([3, 2, 1]));                 // ⟶ 2
console.log(middle([3, 2, 1, 0]));              // ⟶ 2
console.log(middle([3, 2, 1, 0, 7, 8]));        // ⟶ 1
console.log(middle([]));                        // ⟶ undefined

console.log(middleMean([3, 2, 1]));         // ⟶ 2
console.log(middleMean([3, 2, 1, 0]));      // ⟶ 1.5
console.log(middleMean([]));                // ⟶ undefined

console.log(insert([3, 2, 1], 4));      // ⟶ true
console.log(insert([3, 2, 1], 3));      // ⟶ false