// Função usando o while loop:
var c = 1
while (c <= 6) {
  console.log('Tudo bem?')
  c++ // c = c + 1
}


// Função usando Ctrl + C e Ctrl + V:
console.log('\nUsando Ctrl + C e Ctrl + V:')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')


// while loop com interpolação placeholder:
console.log('\nInterpolação placeholder:')
var c = 1
while (c <= 6) {
  console.log(`Passo ${c}`)
  c++ // c = c + 1
}

// Estrutura de repetição com teste lógico no início:
console.log('\nEstrutura de repetição com teste lógico no início:')
condição = false
while (condição) {
  console.log('Tudo bem?')
}

// Estrutura de repetição com teste lógico no final:
console.log('\nEstrutura de repetição com teste lógico no final:')
do {
  console.log('Tudo bem?')
} while (condição)
