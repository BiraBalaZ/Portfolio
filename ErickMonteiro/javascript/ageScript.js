function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.getElementById('res');   
    if (fAno.value.leght == 0 || fAno.value > ano){
        alert('[ERRO] Verifique os dados novamente!');
    } else {
        var fSex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fSex[0].checked){
            genero = 'Homem'

            if (idade >= 0 && idade < 12){
                img.setAttribute('src', '../images/crianca-homem.jpg')
            } else if (idade >= 13 && idade < 21) {
                img.setAttribute('src', '../images/jovem-homem.jpg')
            } else if (idade >= 21 && idade < 60) {
                img.setAttribute('src', '../images/adulto.jpg')
            } else if (idade >= 60) {
                img.setAttribute('src', '../images/senhor.jpg')
            } else img.setAttribute('src', '../images/crianca-homem.jpg')
        } else if (fSex[1].checked) {
            genero = 'Mulher';
            if (idade <= 0 && idade < 12){
                img.setAttribute('src', '../images/crianca-mulher.jpg')
            } else if (idade >= 13 && idade < 21) {
                img.setAttribute('src', '../images/jovem-mulher.jpg')
            } else if (idade >= 21 && idade < 60) {
                img.setAttribute('src', '../images/adulta.jpg')
            } else if (idade >= 60) {
                img.setAttribute('src', '../images/senhora.jpg')
            } else img.setAttribute('src', '../images/crianca-mulher.jpg')
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`;
        res.appendChild(img);
    }
}