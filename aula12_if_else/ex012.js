// Objetivo: mostrar o uso do if/else if/else.
// Coleta a hora atual do sistema.
var hora = new Date().getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
  console.log('Bom dia!')
} else if (hora <= 18) {
  console.log('Boa tarde!')
} else {
  console.log('Boa noite!')
}
