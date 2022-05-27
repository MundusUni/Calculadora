let numtela = ""
let nummem = ""
//let nummemarray = []
let numfin = ""
let sinalpositivo = true
let visor = document.getElementById('tela1')

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
    numfin = ""
    visor.innerHTML = "Favor Digite"
}

function somar() {
    nummem = numtela
    //nummemarray.push(numtela)
    numtela = ""
    visor.innerHTML = "0"
    sinalpositivo = true
}

function subtrair() {
    nummem = numtela
    //nummemarray.push(numtela)
    numtela = ""
    visor.innerHTML = "0"
    sinalpositivo = false
}

function resultado() {
    if (sinalpositivo == true) {
        numfin = Number(nummem) + Number(numtela)}
    else {
        numfin = Number(nummem) - Number(numtela)
    }
    visor.innerHTML = numfin
    nummem = numfin
    numfin = ""
}