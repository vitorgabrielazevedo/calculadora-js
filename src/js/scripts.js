// selecionando os elementos

const displayPreview = document.querySelector("#display-preview");
const displayAtual = document.querySelector("#display-atual");
const buttons = document.querySelectorAll("#teclado button");

// classe

class Calculadora {
  constructor(displayPreview, displayAtual) {
    this.displayPreview = displayPreview;
    this.displayAtual = displayAtual;
    this.operacaoAtual = "";
  }

  // adicionar digito à tela da calculadora

  adicionarDigito(digito) {
    // checar se já existe um ponto no número

    if (digito === "." && this.displayAtual.innerText.includes(".")) return;

    this.operacaoAtual = digito;
    this.atualizarScreen();
  }

  // atualizar screen com novos valores

  atualizarScreen() {
    this.displayAtual.innerText += this.operacaoAtual;
  }

  // processar todas as operações

  processarOperacao(operacao) {
    let operador;
    const preview = +this.displayPreview.innerText;
    const valorAtual = +this.displayAtual.innerText;
  }
}

const calculadora = new Calculadora(displayPreview, displayAtual);

// eventos

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const valor = e.target.innerText;

    if (+valor >= 0 || valor === ".") {
      calculadora.adicionarDigito(valor);
    } else {
      calculadora.processarOperacao(valor);
    }
  });
});

// const displayPrevia = document.querySelector("#previa");
// const displayAtual = document.querySelector("#operacao-atual");
// const botaoIgual = document.querySelector(".igual");
// const botaoPonto = document.querySelector(".ponto");
// const botoesNum = document.querySelectorAll(".num");
// const botoesOperador = document.querySelectorAll(".operador");
// const botoesOperacao = document.querySelectorAll(".operacao");

// class Calculadora {
//   constructor(displayPrevia, displayAtual) {
//     this.displayPrevia = displayPrevia;
//     this.displayAtual = displayAtual;
//     this.operacaoAtual = "";
//   }

//   adicionarDigito(digito) {
//     if (digito === "." && this.displayAtual.innerText === "") {
//       digito = "0.";
//     }

//     this.operacaoAtual = digito;
//     this.atualizarDisplay();
//   }

//   calcular() {
//     let resultado = eval(this.displayAtual.innerText);
//     this.displayPrevia.innerText = this.displayAtual.innerText;
//     this.displayAtual.innerText = resultado;
//   }

//   processarDelOp() {
//     this.displayAtual.innerText = this.displayAtual.innerText.slice(0, -1);
//     this.displayPrevia.innerText = this.displayPrevia.innerText.slice(0, -1);
//   }

//   processarCOp() {
//     this.displayAtual.innerText = "";
//   }

//   processarCEOp() {
//     this.displayAtual.innerText = "";
//     this.displayPrevia.innerText = "";
//   }

//   processarOperacoes(valor) {
//     if (valor === "DEL") {
//       this.processarDelOp();
//     } else if (valor === "C") {
//       this.processarCOp();
//     } else {
//       this.processarCEOp();
//     }
//   }

//   atualizarDisplay() {
//     this.displayAtual.innerText += this.operacaoAtual;
//   }
// }

// let sinal = false;
// let decimal = false;
// let valor = "";

// const calculadora = new Calculadora(displayPrevia, displayAtual);

// botoesNum.forEach((botao) => {
//   botao.addEventListener("click", (evento) => {
//     sinal = false;
//     valor = evento.target.innerText;
//     calculadora.adicionarDigito(valor);
//   });
// });

// botoesOperador.forEach((botao) => {
//   botao.addEventListener("click", (evento) => {
//     if (!sinal) {
//       sinal = true;
//       decimal = false;
//       valor = evento.target.innerText;
//       calculadora.adicionarDigito(valor);
//     }
//   });
// });

// botaoPonto.addEventListener("click", (evento) => {
//   if (!decimal) {
//     decimal = true;
//     valor = evento.target.innerText;
//     calculadora.adicionarDigito(valor);
//   }
// });

// botaoIgual.addEventListener("click", (evento) => {
//   calculadora.calcular();
// });

// botoesOperacao.forEach((botao) => {
//   botao.addEventListener("click", (evento) => {
//     valor = evento.target.innerText;
//     calculadora.processarOperacoes(valor);
//   });
// });
