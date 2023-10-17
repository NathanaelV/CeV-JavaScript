function parimpar(num) {
  if (num % 2 == 0) {
    return 'Par'
  } else {
    return 'Ímpar'
  }
}

// Parâmetros pré-definidos
function soma(n1=0, n2=0) {
  return n1 + n2
}

// Salvar uma função dentro de uma variável
let v = function(x) {
  return x * 2
}

// Chama a função e mostra na tela
console.log('\nPar ou Ímpar')
console.log(parimpar(4))

console.log('\nSoma')
console.log(soma(3))

// Chama a função salva em v
console.log(v(3))


// Fatorial
function fatorial(n) {
  let fat = 1
  for(let c = n; c > 1; c--) {
    fat *= c
  }
  return fat
}
console.log('\nFatorial:')
console.log(fatorial(5))

// Recursividade

/*
Levando em conta
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!
n! = n x (n - 1)!
1! = 1
*/

function fatorialRecursiva(n) {
  if (n == 1) {
    return 1
  } else {
    return n * fatorialRecursiva(n - 1)
  }
}
console.log('\nFatorial usando função Recursiva')
console.log(fatorialRecursiva(5))
