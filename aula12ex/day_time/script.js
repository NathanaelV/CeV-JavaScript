function carregar () {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    // Bom dia!
    img.src = 'js_imagens/morning_250.png'
    // A cor foi escolhida com base na imagem, usando conta gotas (tool picker color)
    document.body.style.background = '#7ec9fa'
  } else if (hora >= 12 && hora < 18) {
    // Boa tarde!
    img.src = 'js_imagens/afternoon_250.png'
    document.body.style.background = '#b9846f'
  } else {
    // Boa noite!
    img.src = 'js_imagens/night_250.png'
    document.body.style.background = '#11324c'
  }
}
