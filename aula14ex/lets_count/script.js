function verificar() {
  let start_value = document.querySelector('input#starttext').value
  let end_value = document.getElementById('endtext').value
  let step_value = document.querySelector('input#step').value
  let result = document.getElementById('result')

  if (start_value == '' || end_value == '') {
    result.innerHTML = 'Impossível contar!'
  } else {
    if (step_value <= 0) {
      window.alert('Passo inválido! Considerando PASSO = 1')
      step_value = 1
    }

    // <br> It'll break line. It works because it's using `innerHTML`
    let anwser = 'Contando: <br>'
    let start_num = Number(start_value)
    let end_num = Number(end_value)
    let step_num = Number(step_value)
    
    if (start_num < end_num) {
      // Counting up
      for (let int = start_num; int <= end_num; int += step_num) {
        console.log(int)
        anwser += `${int} \u{1F449} `
      }
    } else {
      // Countdown
      for (let int = start_num; int >= end_num; int -= step_num) {
        console.log(int)
        anwser += `${int} \u{1F449} `
      }
    }

    result.innerHTML = `${anwser}\u{1F3C1}`
  }
}
