function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO]Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <= 10){
                // criança
                img.setAttribute('src', '/img/menino.jpg')
            }else if(idade < 21){
                // jovem
               img.setAttribute('src','/img/garoto.jpg') 
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','/img/adulto.jpg')
            }else{
                //idoso
                img.setAttribute('src','/img/idoso.jpg')
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                // criança
                img.setAttribute('src','/img/menina.jpg')
            }else if(idade < 21){
                // jovem
               img.setAttribute('src','/img/garota.jpg') 
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','/img/adulta.jpg')
            }else{
                //idoso
                img.setAttribute('src','/img/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Identificamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}