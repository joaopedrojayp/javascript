function verificar() {
    // == VARIAVEIS ==
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector("div#res")
  
//   == CONDIÇÕES
  if(fano.value == 0 || fano.value > ano) {
    alert
    ('[ERRO] Verifique os Dados, e tente  novamente!')
  }else{
     var fsex = document.getElementsByName('radsex')
     var idade = ano - Number(fano.value)
     var genero = ''
     var img = document.createElement('img')
     img.setAttribute('id', 'foto')
     if(fsex[0].checked) {
        genero = 'Homem'
        if(idade >=0 && idade < 10) {
            //crianca
          img.setAttribute('src', 'bebe-homem.jpg')
        } else if(idade < 21) {
           //jovem
           img.setAttribute('src', 'menino-jovem.webp')
        } else if(idade < 50) {
            //adulto
            img.setAttribute('src', 'homem-adulto.jpg')
        } else{
            //idoso
            img.setAttribute('src', 'homem-idoso.jpg')
        }
     }else if (fsex[1].checked) {
        genero = 'Mulher'
          if(idade >=0 && idade < 10) {
            //crianca
            img.setAttribute('src', 'bebe-mulher.jpg')
        } else if(idade < 21) {
           //jovem
           img.setAttribute('src', 'garota-jovem.webp')
        } else if(idade < 50) {
            //adulto
            img.setAttribute('src', 'mulher-adulta.jpg')
        } else{
            //idoso
            img.setAttribute('src', 'mulher-idosa.jpg')
        }
     }
     res.innerHTML = `Detetamos ${genero} com ${idade} anos.`
     res.appendChild(img)
  }
}