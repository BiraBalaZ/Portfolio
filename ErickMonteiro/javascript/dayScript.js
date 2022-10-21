function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;

    //Trocando a imagem e o fundo de acordo com a hora.
    if (hora >= 0 && hora < 12){
        //Bom dia!
        img.src="../images/01manha.jpg";
        document.body.style.background = '#e2cd9f';
    }else if (hora >= 12 && hora <= 18){
        //Boa tarde!
        img.src="../images/02tarde.jpg";
        document.body.style.background = '#b9846f';
    }else{
        //Boa Noite!
        img.src="../images/03noite.jpg";
        document.body.style.background = '#515154';
    }
}