function RelogioDigital() {
    // setando as variaveis responsaveis por pegar o horario atual
    let agora = new Date()
    let hora = agora.getHours()
    let minutos = agora.getMinutes()
    let segundos = agora.getSeconds()

    // variavel que ira armazenar o resultado
    let relogio

    // pegando a div para imprimir o resultado
    let resultado = document.querySelector("#MyClockDisplay")

    // ifs responsaveis por verificar se a hora, minutos, segundos sao menor que 10 se for acresenta o numero '0' antes 
    if(hora < 10) {
        hora = `0${hora}`
    }
    
    if(minutos < 10) {
        minutos = `0${minutos}`
    }
    
    if(segundos < 10) {
        segundos = `0${segundos}`
    }

    // switch responsavel por trocar o formato 24 hora pelo de 12 hora
    switch(hora) {
        case 13:
            hora = '01'
            relogio = (`${hora}:${minutos}:${segundos} PM`)
        break
        case 14:
            hora = '02'
            relogio = (`${hora}:${minutos}:${segundos} PM`)
        break
        case 15:
            hora = '03'
            relogio = (`${hora}:${minutos}:${segundos} PM`)
        break
        case 16:
            hora = '04'
            relogio = (`${hora}:${minutos}:${segundos} PM`)
        break
        case 17:
            hora = '05'
            relogio = (`${hora}:${minutos}:${segundos} PM`)
        break
        case 18:
            hora = '06'
            relogio = (`${hora}:${minutos}:${segundos} PM`)
        break
        case 19:
            hora = '07'
            relogio = (`${hora}:${minutos}:${segundos} PM`)
        break
        case 20:
            hora = '08'
            relogio = (`${hora}:${minutos}:${segundos} PM`)
        break
        case 21:
            hora = '09'
            relogio = (`${hora}:${minutos}:${segundos} PM`)
        break
        case 22:
            hora = '10'
            relogio = (`${hora}:${minutos}:${segundos} PM`)
        break
        case 23:
            hora = '11'
            relogio = (`${hora}:${minutos}:${segundos} PM`)
        break
        case 24:
            hora = '12'
            relogio = (`${hora}:${minutos}:${segundos} PM`)
        break
        default:
            relogio = (`${hora}:${minutos}:${segundos} AM`)
    }

    // imprimindo o resultado na tela
    resultado.innerHTML = relogio
}

setInterval(RelogioDigital, 1000)