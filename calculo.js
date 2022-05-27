let numtela = ""
let nummem = ""
let visor = document.getElementById('tela1')
let tipoDeCalculo = "" // 0=soma  1=subtrair  2=dividir  3=multiplicar

function operacao(n) {
    if (numtela.toString().length < 8) 
        numtela = numtela + n
        visor.innerHTML = numtela
}

function limpar() {
    numtela = ""
    visor.innerHTML = "Favor Digite" 
}

function limpartudo() {
    numtela = ""
    nummem = ""
    visor.innerHTML = "Favor Digite"
}

function somar() {
    if (nummem > 0) {
        calculo()
        tipoDeCalculo = "0"
        visor.innerHTML = nummem
    } else {
        tipoDeCalculo = "0"
        nummem = numtela
        numtela = ""
        visor.innerHTML = nummem
    }
}

function subtrair() {
    if (nummem > 0) {
        calculo()
        tipoDeCalculo = "1"
        visor.innerHTML = nummem
    } else {
        tipoDeCalculo = "1"
        nummem = numtela
        numtela = ""
        visor.innerHTML = nummem
    }
}

function dividir() {
    if (nummem > 0) {
        calculo()
        tipoDeCalculo = "2"
        visor.innerHTML = nummem
    } else {
        tipoDeCalculo = "2"
        nummem = numtela
        numtela = ""
        visor.innerHTML = nummem
    }
}

function multiplicar() {
    if (nummem > 0) {
        calculo()
        tipoDeCalculo = "3"
        visor.innerHTML = nummem
    } else {
        tipoDeCalculo = "3"
        nummem = numtela
        numtela = ""
        visor.innerHTML = nummem
    }
}

function calculo() {
    switch(tipoDeCalculo) {
        case "0":
            nummem = Number(nummem) + Number(numtela)
            numtela = ""
            tipoDeCalculo = ""
            break
        case "1":
            nummem = Number(nummem) - Number(numtela)
            numtela = ""
            tipoDeCalculo = ""
            break
        case "2":
            nummem = Number(nummem) / Number(numtela)
            numtela = ""
            tipoDeCalculo = ""
            break
        case "3":
            nummem = Number(nummem) * Number(numtela)
            numtela = ""
            tipoDeCalculo = ""
            break
        default:
            //numtela = ""
    }
}

function resultado() {
    calculo()
    visor.innerHTML = nummem
}