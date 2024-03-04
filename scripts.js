const displayPrevia = document.querySelector("#previa")
const displayAtual = document.querySelector("#operacaoAtual")
const botaoIgual = document.querySelector(".igual")
const botaoPonto = document.querySelector(".ponto")
const botoesNum = document.querySelectorAll(".num")
const botoesOperador = document.querySelectorAll(".operador")
const botoesOperacao = document.querySelectorAll(".operacao")

class Calculadora {
    constructor(displayPrevia, displayAtual){
        this.displayPrevia = displayPrevia
        this.displayAtual = displayAtual
        this.operacaoAtual = ""
    }

    adicionarDigito(digito){
        if(digito === "." && this.displayAtual.innerText === ""){
            digito = "0."
        }

        this.operacaoAtual = digito 
        this.atualizarDisplay()
    }

    calcular(){
        let resultado = eval(this.displayAtual.innerText);
        this.displayPrevia.innerText = this.displayAtual.innerText
        this.displayAtual.innerText = resultado
    }

    processarDelOp(){
        this.displayAtual.innerText = this.displayAtual.innerText.slice(0, -1)
        this.displayPrevia.innerText = this.displayPrevia.innerText.slice(0, -1)
    }

    processarCOp(){
        this.displayAtual.innerText = ""
    }

    processarCEOp(){
        this.displayAtual.innerText = ""
        this.displayPrevia.innerText = ""
    }

    processarOperacoes(valor){
        if(valor === "DEL"){
            this.processarDelOp()
        }else if(valor === "C"){
            this.processarCOp()
        }else{
            this.processarCEOp()
        }
    }

    atualizarDisplay(){ 
        this.displayAtual.innerText += this.operacaoAtual
    }
}

let sinal = false
let decimal = false
let valor = ""

const calculadora = new Calculadora(displayPrevia, displayAtual)

botoesNum.forEach((botao) => {
    botao.addEventListener("click", (evento) => {
        sinal = false
        valor = evento.target.innerText;
        calculadora.adicionarDigito(valor)
    })
})

botoesOperador.forEach((botao) => {
    botao.addEventListener("click", (evento) => {
        if(!sinal){
            sinal = true
            decimal = false
            valor = evento.target.innerText;
            calculadora.adicionarDigito(valor)
        }
    })
})

botaoPonto.addEventListener("click", (evento) => {
    if(!decimal){
        decimal = true
        valor = evento.target.innerText;
        calculadora.adicionarDigito(valor)
    }
})

botaoIgual.addEventListener("click", (evento) => {
    calculadora.calcular()
})

botoesOperacao.forEach((botao) => {
    botao.addEventListener("click", (evento) => {
        valor = evento.target.innerText;
        calculadora.processarOperacoes(valor)
    })
})
