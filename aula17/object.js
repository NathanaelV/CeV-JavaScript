// Tanto o Array quanto o Object tem o mesmo typeoff
// Isso acontece porque ambos tem a mesma origem

console.log(`Typeof Array: ${typeof []}`)
console.log(`Typeof Object: ${typeof {}}`)

let friend = {
  name: 'João',
  gender: 'M',
  weight: 85.4,
  gained_weight(p=0) {
    console.log('Engordou')
    this.weight += p
  }
}

console.log('\nMostra amigo:')
console.log(friend)

// Posso mostrar somente o atributo:
console.log('\nEx.: friend.name')
console.log(friend.name)

friend.gained_weight(2)
console.log(`${friend.name} pesa ${friend.weight}`)


console.log('\n')

// this is be using in a contructor method.
function Person(name) {
  this.name = name;
}

const john = new Person('John');
console.log(john.name); // "John"
john.name = 'Andrew'
console.log(john.name) // 'Andrew
