function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')

  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''

    // Cria o elemento img, como se fosse no HTML
    var img = document.createElement('img')
    // Define o id do elemento img como 'foto'
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 12) {
        // Criança
        img.setAttribute('src', 'js_imagens/young_boy_250.png')
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'js_imagens/teenage_boy_250.png')
      } else if (idade < 65) {
        // Adulto
        img.setAttribute('src', 'js_imagens/man_250.png')
      } else {
        // Idoso
        img.setAttribute('src', 'js_imagens/old_man_250.png')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 12) {
        // Criança
        img.setAttribute('src', 'js_imagens/young_girl_250.png')
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'js_imagens/teenage_girl_250.png')
      } else if (idade < 60) {
        // Adulto
        img.setAttribute('src', 'js_imagens/woman_250.png')
      } else {
        // Idoso
        img.setAttribute('src', 'js_imagens/old_woman_250.png')
      }
    }
    // Centraliz o texto
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    // Adiciona a imagem após o conteúdo res.innerHTML
    res.appendChild(img)
  }
}
