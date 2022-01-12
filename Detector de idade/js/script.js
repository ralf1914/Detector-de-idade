function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[Erro] verifique se as informações estão corretas e tente novamente')
    } else{
        var fsex = document.getElementsByName('sexo') 
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-h.png')
            } else if(idade <= 18){
                img.setAttribute('src', 'foto-adolescente-h.png')
            }else if(idade <= 40){
                img.setAttribute('src', 'foto-jovem-h.png')
            } else{
                img.setAttribute('src', 'foto-idoso-h.png')

            }

        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if(idade <= 18){
                img.setAttribute('src', 'foto-adolescente-m.png')
            }else if(idade <= 40){
                img.setAttribute('src', 'foto-jovem-m.png')
            } else{
                img.setAttribute('src', 'foto-idosa-m.png')

            }
        }
        res.style.textAlign = 'center'
        img.style.borderRadius= '50%'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos `
        res.appendChild(img)
    }



}