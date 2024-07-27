// selecionando os elementos

const operacaoAnteriorText = document.querySelector("#operacao-anterior");
const operacaoAtualText = document.querySelector("#operacao-atual");
const buttons = document.querySelectorAll("#teclado button");

// classe

class Calculadora {
  constructor(operacaoAnteriorText, operacaoAtualText) {
    this.operacaoAnteriorText = operacaoAnteriorText;
    this.operacaoAtualText = operacaoAtualText;
    this.operacaoAtual = "";
  }

  // adicionar digito à tela da calculadora

  adicionarDigito(digito) {
    // checar se já existe um ponto no número

    if (digito === "." && this.operacaoAtual.innerText.includes(".")) return;

    this.operacaoAtual = digito;
    this.atualizarScreen();
  }

  // processar todas as operações

  processarOperacao(operador) {
    let valorOperacao;
    const valorAnterior = +this.operacaoAnteriorText.innerText.split(" ")[0];
    const valorAtual = +this.operacaoAtualText.innerText;

    switch (operador) {
      case "+":
        valorOperacao = valorAnterior + valorAtual;
        this.atualizarScreen(
          valorOperacao,
          operador,
          valorAnterior,
          valorAtual
        );
        break;
      case "-":
        valorOperacao = valorAnterior - valorAtual;
        this.atualizarScreen(
          valorOperacao,
          operador,
          valorAnterior,
          valorAtual
        );
        break;
      case "x":
        valorOperacao = valorAnterior * valorAtual;
        this.atualizarScreen(
          valorOperacao,
          operador,
          valorAnterior,
          valorAtual
        );
        break;
      case "/":
        valorOperacao = valorAnterior / valorAtual;
        this.atualizarScreen(
          valorOperacao,
          operador,
          valorAnterior,
          valorAtual
        );
        break;
      default:
        return;
    }
  }

  // atualizar screen com novos valores

  atualizarScreen(
    valorOperacao = null,
    operador = null,
    valorAnterior = null,
    valorAtual = null
  ) {
    console.log(valorOperacao, operador, valorAnterior, valorAtual);

    if (valorOperacao === null) {
      this.operacaoAtualText.innerText += this.operacaoAtual;
    } else {
      // checar se o valor é zero, adiciona o valorAtual

      if (valorAnterior === 0) {
        valorOperacao = valorAtual;
      }

      this.operacaoAnteriorText.innerText = `${valorOperacao} ${operador}`;
      this.operacaoAtualText.innerText = "";
    }
  }
}

const calculadora = new Calculadora(operacaoAnteriorText, operacaoAtualText);

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
// const operacaoAtual = document.querySelector("#operacao-atual");
// const botaoIgual = document.querySelector(".igual");
// const botaoPonto = document.querySelector(".ponto");
// const botoesNum = document.querySelectorAll(".num");
// const botoesOperador = document.querySelectorAll(".operador");
// const botoesOperacao = document.querySelectorAll(".operacao");

// class Calculadora {
//   constructor(displayPrevia, operacaoAtual) {
//     this.displayPrevia = displayPrevia;
//     this.operacaoAtual = operacaoAtual;
//     this.operacaoAtual = "";
//   }

//   adicionarDigito(digito) {
//     if (digito === "." && this.operacaoAtual.innerText === "") {
//       digito = "0.";
//     }

//     this.operacaoAtual = digito;
//     this.atualizarDisplay();
//   }

//   calcular() {
//     let resultado = eval(this.operacaoAtual.innerText);
//     this.displayPrevia.innerText = this.operacaoAtual.innerText;
//     this.operacaoAtual.innerText = resultado;
//   }

//   processarDelOp() {
//     this.operacaoAtual.innerText = this.operacaoAtual.innerText.slice(0, -1);
//     this.displayPrevia.innerText = this.displayPrevia.innerText.slice(0, -1);
//   }

//   processarCOp() {
//     this.operacaoAtual.innerText = "";
//   }

//   processarCEOp() {
//     this.operacaoAtual.innerText = "";
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
//     this.operacaoAtual.innerText += this.operacaoAtual;
//   }
// }

// let sinal = false;
// let decimal = false;
// let valor = "";

// const calculadora = new Calculadora(displayPrevia, operacaoAtual);

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
