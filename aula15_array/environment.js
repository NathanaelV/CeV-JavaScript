let num = [5, 8, 4]

// Show Array contents
console.log(`Nosso vetor é o ${num}`)

// Show Array
console.log('\nShow the Array:')
console.log(num)

// Show a specific position in a Array
console.log(num[1])

// Assign a value to a specific position in the Array
console.log('\nAssing a value to a specific position in the Array')
num[3] = 6
console.log(num)

// Add a value to the end of the Array
console.log('\nAdd a value to the end of the Array')
num.push(7)
console.log(num)

// Add a value to the beginning of the Array
console.log('\nAdd a value to the beginning of the Array')
num.unshift(9)
console.log(num)

// Count the number of elements within the Array
console.log('\nCount the number of elements within the Array')
console.log(num.length)

// Sort the Array
console.log('\nSort the Array')
numSort = num.sort()
console.log(numSort)

// Show Array using for
console.log('\nShow Array using `for`')
for (let pos = 0; pos < num.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

// Another way to show the items in an Array
console.log('\nAnother way to show the items in an Array')
for (let pos in num) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

// Search for the index of a value
console.log('\nSearch for the index of a value')
console.log(num.indexOf(7))
console.log('When there is no value in the Aray')
console.log(num.indexOf(2))