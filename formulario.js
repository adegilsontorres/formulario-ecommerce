'use strict';

const campoTemaDeContato = document.getElementById('temadecontato'); //Quero comprar, Meus pedidos
const campoStatusEntrega = document.getElementById('selecao-produto__status'); //Entregue, A caminho
const motivoDeContato = document.getElementById('motivoDeContato');//Assunto do contato

const descricaoMotivoDeContato = document.getElementById('experiencia');//Mensagem do cliente
const botaoEnviarFormulario = document.getElementById('botaoEnviarFormulario');

let temaSelecionado = '';

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
        ["Quer saber quando um produto terá estoque novamente? Aqui você terá a resposta.",
            "Sabe quando você tem uma dúvida extra sobre o produto? Igual quando quer saber quantos bolsos a mochila tem. Este é o tema pra isso.",
            "Elogios e sugestões são importantes para contribuir na evolução de nossos serviços. Fique à vontade.",
            "Sabe quando alguma página deveria ter carregado e não foi? Ou um item não entrou em seu carrinho de compras? Este é o tema pra isso.",
            "Em frete, você poderá consultar ou alertar sobre uma valor de frete fora da curva.",
            "Seu voucher não foi adicionado com sucesso? Nosso site não está reconhendo o voucher? Esta é o assunto para isso.",
            "O motivo de seu contato não é nenhum dos listados a cima? Sem problemas, descreva aqui."
        ]
}

const listaDeMotivosMeusPedidos = {
    titulo:
        [
            "Acompanhar minha entrega",
            "Alterar endereço de meu pedido",
            "Atraso na entrega",
            "Cancelar pedido",
            "Dúvidas sobre meu pedido",
            "Elogio e sugestão",
            "Meu estorno não foi feito",
            "Pedido consta como entregue mas não recebi",
            "Pontuação programa de Fidelidade",
            "Problemas com a entrega",
            "Quero acionar a garantia",
            "Segunda via de Nota Fiscal",
            "Meu pedido foi cancelado",
            //"Outros assuntos",
            //"Elogio e sugestão",
            //"Meu estorno não foi feito",
            //"Pontuação programa de Fidelidade",
            //"Quero acionar a garantia",
            "Quero acompanhar uma troca ou devolução",
            "Quero trocar ou devolver um produto",
            "Recebi meu pedido errado",
            "Recebi meu pedido incompleto",
            //"Segunda via de Nota Fiscal",
            "Outros assuntos"
        ],
    descricao:
        [
            "Neste assunto, você poderá consultar o status da entrega de seu pedido.",
            "Você deseja trocar o endereço ou corrigir? Está no local certo.",
            "Neste cenário, seu pedido ainda não chegou e o prazo já extrapolou.",
            "Aqui você deseja optar pela desistência de um pedido que ainda não chegou.",
            "Sabe quando você precisa confirmar o tamanho escolhido ou se algum cupom foi aplicado? Você está no assunto certo.",
            "Elogios e sugestões são importantes para contribuir na evolução de nossos serviços. Fique à vontade.",
            "Neste cenário, nosso time lhe informou que seu estorno foi solicitado, porém, o prazo passou e você deseja consultar o status.",
            "Seu pedido foi classificado como entregue, porém, você ainda não o recebeu. Dica: Caso more em condomínio ou prédio, você poderá consultar na portaria.",
            "Você usou algum cupom de pontuação ou usou alguma plataforma de pontuação e deseja consultar se houve sucesso? Este é assunto ideal.",
            "Este assunto é usado quando a transportadora não encontrou o endereço informado ou o pacote está em devolução.",
            "Seu produto apresentou problemas? Podemos te ajudar aqui.",
            "Sem segredos. Podemos lhe mandar a segunda via da nota fiscal.",
            "Seu pedido não seguiu o fluxo natural, não é? Podemos te ajudar aqui.",
            "Você já abriu uma solicitação de troca ou devolução e deseja saber o status atual? Este é o assunto para isso.",
            "Seu pedido chegou e você deseja fazer uma troca ou devolução? Podemos te ajudar aqui.",
            "Seu pedido não chegou como o esperado? Não se preocupe, iremos cuidar disso.",
            "Seu pedido chegou parcialmente? Nosso time irá verificar o que houve.",
            "O motivo de seu contato não é nenhum dos listados a cima? Sem problemas, descreva aqui.",

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
        [
            "Alteração senha",
            "Cadastro",
            "Elogio e sugestão",
            "Outros assuntos"
        ],
    descricao: [
        "Esqueceu a senha utilizada? Podemos te ajudar reestabelcer o acesso à plataforma.",
        "Deseja alterar seus dados pessoais? Podemos te ajudar por aqui.",
        "Elogios e sugestões são importantes para contribuir na evolução de nossos serviços. Fique à vontade.",
        "O motivo de seu contato não é nenhum dos listados a cima? Sem problemas, descreva aqui.",
    ]
}

const listaDeMotivosLojasFisicas = {
    titulo:
        [
            "Elogio e sugestões",
            "Esqueci um item em loja",
            "Expansão de lojas físicas",
            "Eventos",
            "Horário de funcionamento",
            "Segunda via de nota fiscal",
            "Outros assuntos"
        ],
    descricao: [
        "Elogios e sugestões são importantes para contribuir na evolução de nossos serviços. Fique à vontade.",
        "Acabou deixando um de seus pertences em uma de nossas lojas? Poderemos lhe ajudar.",
        "Quer sugerir uma cidade para abrirmos uma nova unidade? Este é o local correto.",
        "Precisa saber de alguma informação de um de nossos eventos? Este é o assunto correto.",
        "Deseja saber o horário de funcionamento de nossas lojas ou se iremos abrir no feriado?",
        "Sem segredos. Podemos lhe mandar a segunda via da nota fiscal.",
        "O motivo de seu contato não é nenhum dos listados a cima? Sem problemas, descreva aqui."

    ]
}

const listaDeMotivosOutrosAssuntos = {
    titulo: [
        "Patrocínio e parcerias",
        "Projetos sociais",
        "Quero ser uma loja parceira"
    ],
    descricao: [
        "Você tem um projeto legal ou uma história inspiradora? Fique à vontade para nos contar.",
        "Deseja indicar um projeto social para indicar nosso apoio?",
        "Nós somos um Marketplace. Você deseja vender dentro de nossa plataforma? Será um prazer lhe receber.",

    ]
}

//Esta função veirfica se o tema foi escolhido e dá o comando de escrever as opções do que foi escolhido
campoTemaDeContato.addEventListener('change', function () {
    temaSelecionado = campoTemaDeContato.value;
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
    descricaoMotivoDeContato.placeholder = 'Não se esqueça de nos fornecer o máximo de informações relevantes.'

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

//Esta função verifica o assunto/motivo do tema. 
motivoDeContato.addEventListener('change', function () {
    let indexDeAssunto = '';

    switch (temaSelecionado) {
        case 'QueroComprar':
            indexDeAssunto = listaDeMotivosQueroComprar.titulo.indexOf(motivoDeContato.value);
            descricaoMotivoDeContato.placeholder = listaDeMotivosQueroComprar.descricao[indexDeAssunto];
            break;

        case 'MeusPedidos':
            indexDeAssunto = listaDeMotivosMeusPedidos.titulo.indexOf(motivoDeContato.value);
            descricaoMotivoDeContato.placeholder = listaDeMotivosMeusPedidos.descricao[indexDeAssunto];
            break;

        case 'DadosPessoais':
            indexDeAssunto = listaDeMotivosDadosPessoais.titulo.indexOf(motivoDeContato.value);
            descricaoMotivoDeContato.placeholder = listaDeMotivosDadosPessoais.descricao[indexDeAssunto];
            break;

        case 'LojasFisicas':
            indexDeAssunto = listaDeMotivosLojasFisicas.titulo.indexOf(motivoDeContato.value);
            descricaoMotivoDeContato.placeholder = listaDeMotivosLojasFisicas.descricao[indexDeAssunto];
            break;

        case 'OutrosAssuntos':
            indexDeAssunto = listaDeMotivosOutrosAssuntos.titulo.indexOf(motivoDeContato.value);
            descricaoMotivoDeContato.placeholder = listaDeMotivosOutrosAssuntos.descricao[indexDeAssunto];
            break;

    }

}
)

mostrarAssuntosNaTela();
