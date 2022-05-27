let numtela = ""
let numfin = ""
let numtemp = ""
let nummemarray = []
let calculoarray = []
let sinalarray = []
let i = 0
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
    numfin = ""
    nummemarray = []
    calculoarray = []
    sinalarray = []
    visor.innerHTML = "Favor Digite"
}

function somar() {
    nummemarray.push(numtela)
    sinalarray.push("+")
    numtela = ""
    visor.innerHTML = "0"
}

function subtrair() {
    nummemarray.push(numtela)
    sinalarray.push("-")
    numtela = ""
    visor.innerHTML = "0"
}

function resultado() {
    nummemarray.push(numtela)
    do {
        calculoarray.push(Number(nummemarray[i]))
        calculoarray.push(sinalarray[i])
        i += 1
    }
    while (nummemarray.length - 1 > i)
    calculoarray.push(Number(nummemarray[i]))
    i = 0
    numtemp = calculoarray.join([])
    numfin = eval(numtemp)

    visor.innerHTML = numfin
    nummem = numfin
    numfin = ""
}