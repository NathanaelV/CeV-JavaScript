function tabuada() {
  let num = document.querySelector('input#txtn')
  let tab = document.getElementById('seltab')

  if (num.value.length == 0) {
    window.alert('Por favor, digite um número!')
  } else {
    let n = Number(num.value)
    // Limpa a tabuada antes de mostrar o próximo valor
    tab.innerHTML = ''

    for (let int = 1; int <= 10; int += 1) {
      let item = document.createElement('option')
      item.text = `${int} x ${n} = ${int * n}`
      
      // Possíbilita identificar o item selecionado
      item.value = `tab${c}`
      tab.appendChild(item)
    }
    
  }
}
