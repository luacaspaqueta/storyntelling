const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = ["Você costuma procrastinar suas tarefas?"
        alternativas: [
    {
enunciado
            {
                texto: "Sim",
                afirmacao: "Eu sempre deixo tudo para amanhã, mesmo sabendo que preciso fazer agora. "
            },
            {
                texto: "Não",
                afirmacao: "Eu prefiro resolver as coisas logo, para não acumular tarefas"
            }
        ]
    },
    {
<html lang="pt-br"></html>
        enunciado: " Como você se sente ao acordar cedo?",
        alternativas: [
            {
                texto: "Com preguiça",
                afirmacao: "levantar cedo é sempre um desafio, o corpo pede mais horas de sono."
            },
            {
                texto: " Com disposição",
                afirmacao: "Eu adoro acordar cedo, sinto que o dia rende muito mais"
            }
        ]
    },
    {
        enunciado: "O que você faz quando tem algo importante para fazer?",
        alternativas: [
            {
                texto: "fico adiando",
                afirmacao: "Eu fico tentando encontrar desculpas para não fazer, mesmo sabendo que é urgente"
            },
            {
                texto: "faço logo",
                afirmacao: "Quando é importante, não perco tempo e vou logo ao trabalho."
            }
        ]
    },
    {
        enunciado: "Como você reage quando tem que realizar tarefas domésticas?",
        alternativas: [
            {
                texto: "Fico enrolando",
                afirmacao: "Eu sempre tento adiar o máximo possível e acabo deixando para depois."
            },
            {
                texto: "Eu faço rapidamente",
                afirmacao: "Prefiro fazer tudo de uma vez para não acumular mais trabalho."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
