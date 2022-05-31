function carregar(){
    var corpo = window.document.body
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem") 
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto}`
    if(hora >= 0 && hora <12){
        //  Bom dia
        img.src = 'fotomanha.png'  
        corpo.style.background = 'navy blue'  
    }else if(hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'fototarde.png'
        corpo.style.background = 'brown'
    }else {
        //Boa noite
        img.src = 'fotonoite.png'
        corpo.style.background = 'gold'
    }
    if (minuto < 10){
        minuto = "0" + minuto
    }    
}
