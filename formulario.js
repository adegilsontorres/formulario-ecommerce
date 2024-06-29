'use strict';

const campoTemaDeContato = document.getElementById('temadecontato'); //Quero comprar, Meus pedidos
const campoStatusEntrega = document.getElementById('selecao-produto__status'); //Entregue, A caminho
const motivoDeContato = document.getElementById('motivoDeContato');//Assunto do contato

const descricaoMotivoDeContato = document.getElementById('experiencia');//Mensagem do cliente
const botaoEnviarFormulario = document.getElementById('botaoEnviarFormulario');

const listaDeMotivosQueroComprar = {
    titulo:
        ["Disponibilidade de produto",
            "Dúvida sobre produto",
            "Elogio e sugestão",
            "Erro na plataforma",
            "Frete",
            "Problemas com voucher",
            "Outros assuntos"
        ],
    descricao:
        ["Sabe quando você quer saber quando um produto terá estoque novamente? Aqui você terá a resposta",
            "Sabe quando você tem uma dúvida extra sobre o produto? Igual quando quer saber quantos bolsos a mochila tem. Este é o tema pra isso",
            "Elogios e sugestões são importantes para contribuir na evolução de nossos serviços. Fique à vontade",
            "Sabe quando alguma página deveria ter carregado e não foi? Ou um item não entrou em seu carrinho de compras? Este é o tema pra isso",
            "Em frete, você poderá consultar ou alertar sobre uma valor de frete fora da curva",
            "Seu voucher não foi adicionado com sucesso? Nosso site não está reconhendo o voucher? Esta é o pra isso",
            "O motivo de seu contato não é nenhum dos listados a cima? Sem problemas, descreva aqui"
        ]
}

const listaDeMotivosMeusPedidos = {
    titulo:
        ["Acompanhar minha entrega",
            "Alterar endereço de meu pedido",
            "Atraso na Entrega",
            "Cancelar pedido",
            "Dúvidas sobre meu pedido",
            "Elogio e sugestão",
            "Meu estorno não foi feito",
            "Pedido consta como entregue mas não recebi",
            "Pontuação programa de Fidelidade",
            "Problemas com a entrega",
            "Quero acionar a garantia",
            "Quero acompanhar uma troca ou devolução",
            "Segunda via de Nota Fiscal",
            "Meu pedido foi cancelado",
            "Outros assuntos",
            //
            "Elogio e sugestão",
            "Meu estorno não foi feito",
            "Pedido consta como entregue mas não recebi",
            "Pontuação programa de Fidelidade",
            "Quero acionar a garantia",
            "Quero acompanhar uma troca ou devolução",
            "Quero trocar ou devolver um produto",
            "Recebi meu pedido errado",
            "Recebi meu pedido incompleto",
            "Segunda via de Nota Fiscal",
            "Outros assuntos"
        ],
    descricao:
        [

        ]
}

// const listaDeMotivosMeusPedidosEntregue = {
//     titulo: 
//     ["Elogio e sugestão", 
//         "Meu estorno não foi feito", 
//         "Pedido consta como entregue mas não recebi",
//         "Pontuação programa de Fidelidade", 
//         "Quero acionar a garantia", 
//         "Quero acompanhar uma troca ou devolução",
//         "Quero trocar ou devolver um produto", 
//         "Recebi meu pedido errado", 
//         "Recebi meu pedido incompleto", 
//         "Segunda via de Nota Fiscal",
//         "Outros assuntos"
//     ],                         
//     descricao:
//     [

//     ]
// }

const listaDeMotivosDadosPessoais = {
    titulo:
        ["Alteração senha", "Cadastro", "Elogio e sugestão", "Outros assuntos"
        ],
    descricao: [

    ]
}

const listaDeMotivosLojasFisicas = {
    titulo:
        ["Atendimento",
            "Elogio e sugestões",
            "Esqueci um item em loja",
            "Expansão de lojas físicas",
            "Eventos",
            "Horário de funcionamento",
            "Segunda via de nota fiscal",
            "Outros assuntos"
        ],
    descricao: [

    ]
}

const listaDeMotivosOutrosAssuntos = {
    titulo:
        ["Patrocínio e parcerias",
            "Decathlon Fundation",
            "Quero ser uma loja parceira"
        ],
    descricao: [

    ]
}

//Esta função veirfica se o tema foi escolhido e dá o comando de escrever as opções do que foi escolhido
campoTemaDeContato.addEventListener('change', function () {
    let temaSelecionado = campoTemaDeContato.value;
    let listaDeMotivos = `listaDeMotivos` + temaSelecionado;
    mostrarAssuntosNaTela(listaDeMotivos);
    if (campoTemaDeContato.value == 'MeusPedidos') {
        campoStatusEntrega.style.display = 'block';
    } else {
        campoStatusEntrega.style.display = 'none';
    }
}
)

function mostrarAssuntosNaTela(listaDeMotivos) {
    motivoDeContato.innerHTML = '<option selected disabled value="">Selecione</option>';

    switch (listaDeMotivos) {
        case 'listaDeMotivosQueroComprar':
            for (let i = 0; i < listaDeMotivosQueroComprar.titulo.length; i++) {
                motivoDeContato.innerHTML += `<option>${listaDeMotivosQueroComprar.titulo[i]}</option>`;
            }
            break;

        case 'listaDeMotivosMeusPedidos':
            for (let i = 0; i < listaDeMotivosMeusPedidos.titulo.length; i++) {
                motivoDeContato.innerHTML += `<option>${listaDeMotivosMeusPedidos.titulo[i]}</option>`;
            }
            break;

        case 'listaDeMotivosDadosPessoais':
            for (let i = 0; i < listaDeMotivosDadosPessoais.titulo.length; i++) {
                motivoDeContato.innerHTML += `<option>${listaDeMotivosDadosPessoais.titulo[i]}</option>`;
            }
            break;

        case 'listaDeMotivosLojasFisicas':
            for (let i = 0; i < listaDeMotivosLojasFisicas.titulo.length; i++) {
                motivoDeContato.innerHTML += `<option>${listaDeMotivosLojasFisicas.titulo[i]}</option>`;
            }
            break;

        case 'listaDeMotivosOutrosAssuntos':
            for (let i = 0; i < listaDeMotivosOutrosAssuntos.titulo.length; i++) {
                motivoDeContato.innerHTML += `<option>${listaDeMotivosOutrosAssuntos.titulo[i]}</option>`;
            }
            break;
    }


}

//Esta função verifica o assunto do tema. 
motivoDeContato.addEventListener('change', function () {
    let indexDeAssunto = listaDeMotivosQueroComprar.titulo.indexOf(motivoDeContato.value);
    alterarTextoDeAjuda(indexDeAssunto);
}
)

function alterarTextoDeAjuda(indice) {
    descricaoMotivoDeContato.placeholder = listaDeMotivosQueroComprar.descricao[indice];
}

mostrarAssuntosNaTela();
