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
            if (idade >= 0 && idade < 10){
                // criança
            }else if(idade < 21){
                // jovem
            }else if(idade < 50){
                //Adulto
            }else{
                //idoso
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // criança
            }else if(idade < 21){
                // jovem
            }else if(idade < 50){
                //Adulto
            }else{
                //idoso
            }
        }
        res.innerHTML = `Identificamos ${gênero} com ${idade} anos.`
    }

}