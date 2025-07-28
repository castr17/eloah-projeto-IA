const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que mais dificulta o acesso à saúde mental no Brasil?",
        alternativas: [
            {
                texto: "a) Alto número de profissionais disponíveis.",
                afirmacao: "Você percebeu que o problema não está na quantidade de profissionais, mas sim na distribuição e acesso desigual."
            },
            {
                texto: "b) Desigualdade social e falta de serviços em algumas regiões.",
                afirmacao: "Você compreendeu que a desigualdade social e a falta de serviços são as maiores barreiras no acesso à saúde mental."
            }
        ]
    },
    {
        enunciado: "Qual política pública brasileira é voltada para atender pessoas com transtornos mentais?",
        alternativas: [
            {
                texto: "a) SUS Rural.",
                afirmacao: "Você percebe que essa opção não está correta, pois não é um programa específico para saúde mental."
            },
            {
                texto: "b) CAPS (Centro de Atenção Psicossocial).",
                afirmacao: "Você acertou! Os CAPS são fundamentais no atendimento de saúde mental no Brasil, oferecendo cuidado contínuo e humanizado."
            }
        ]
    },
    {
        enunciado: "Por que o setor privado de saúde mental não resolve o problema de acesso para todos?",
        alternativas: [
            {
                texto: "a) Porque é mais caro e acessível a poucos.",
                afirmacao: "Você entendeu que, embora o setor privado ofereça mais agilidade, seu alto custo limita o acesso da maioria da população."
            },
            {
                texto: "b) Porque não oferece qualidade.",
                afirmacao: "Você percebe que essa opção não reflete a realidade, já que a qualidade não é o problema principal, mas sim o alto custo."
            }
        ]
    },
    {
        enunciado: "Além da falta de serviços, qual outro fator agrava a dificuldade no acesso à saúde mental?",
        alternativas: [
            {
                texto: "a) A falta de medicamentos.",
                afirmacao: "Você percebeu que a falta de medicamentos não é o fator principal, e sim uma consequência da falta de estrutura."
            },
            {
                texto: "b) O estigma e o preconceito sobre transtornos mentais.",
                afirmacao: "Você compreendeu que o preconceito e o estigma ainda afastam muitas pessoas do cuidado com a saúde mental."
            }
        ]
    },
    {
        enunciado: "O que é necessário para melhorar o acesso à saúde mental no Brasil?",
        alternativas: [
            {
                texto: "a) Aumentar os investimentos, combater o preconceito e formar mais profissionais.",
                afirmacao: "Você acertou! Investimentos, formação de profissionais e a luta contra o preconceito são fundamentais para melhorar o acesso à saúde mental."
            },
            {
                texto: "b) Encerrar o atendimento gratuito no SUS.",
                afirmacao: "Você percebe que encerrar o atendimento gratuito agravaria ainda mais a desigualdade no acesso à saúde mental."
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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "Reflexão Final:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
