'use strict';

const campoTemaDeContato = document.getElementById('temadecontato');
const campoProdutoStatus = document.getElementById('selecao-produto__status');
const motivoDeContato = document.getElementById('motivoDeContato');

campoTemaDeContato.addEventListener('change', function () {
    verificarMotivoDeContato()
    if (campoTemaDeContato.value == 'Meus-pedidos') {
        campoProdutoStatus.style.display = 'block';
        console.log(`Selecionou ${campoTemaDeContato.value}`)
    } else {
        campoProdutoStatus.style.display = 'none';
        console.log(`Selecionou ${campoTemaDeContato.value}`)
    }
}
)

function verificarMotivoDeContato() {
    if (campoTemaDeContato.value == 'Meus-pedidos') {
        motivoDeContato.innerHTML = `<option selected disabled value="">Selecione</option>
                                <option>Meus pedidos | Acompanhar minha entrega</option>
                                <option>Meus pedidos | Alterar endereço de meu pedido</option>
                                <option>Meus pedidos | Atraso na Entrega</option>
                                <option>Meus pedidos | Cancelar pedido</option>
                                <option>Meus pedidos | Dúvidas sobre meu pedido</option>
                                <option>Meus pedidos | Elogio e sugestão</option>
                                <option>Meus pedidos | Meu estorno não foi feito</option>
                                <option>Meus pedidos | Pedido consta como entregue mas não recebi</option>
                                <option>Meus pedidos | Pontuação programa de Fidelidade</option>
                                <option>Meus pedidos | Problemas com a entrega</option>
                                <option>Meus pedidos | Quero acionar a garantia</option>
                                <option>Meus pedidos | Quero acompanhar uma troca ou devolução</option>
                                <option>Meus pedidos | Quero trocar ou devolver um produto</option>
                                <option>Meus pedidos | Recebi meu pedido errado</option>
                                <option>Meus pedidos | Recebi meu pedido incompleto</option>
                                <option>Meus pedidos | Segunda via de Nota Fiscal</option>
                                <option>Meus pedidos | Meu pedido foi cancelado</option>
                                <option>Meus pedidos | Outros assuntos</option>`;
    } else if (campoTemaDeContato.value == 'Quero-comprar') {
        motivoDeContato.innerHTML = `<option selected disabled value="">Selecione</option>
                                <option>Quero comprar | Disponibilidade de produto</option>
                                <option>Quero comprar | Dúvida sobre produto</option>
                                <option>Quero comprar | Elogio e sugestão</option>
                                <option>Quero comprar | Erro na plataforma</option>
                                <option>Quero comprar | Frete</option>
                                <option>Quero comprar | Problemas com vale troca</option>
                                <option>Quero comprar | Outros assuntos</option>`;
    } else if (campoTemaDeContato.value == 'Dados-pessoais') {
        motivoDeContato.innerHTML = `<option selected disabled value="">Selecione</option>
    <option>Dados pessoais | Ajuda com login</option>
                                <option>Dados pessoais | Alteração senha</option>
                                <option>Dados pessoais | Cadastro</option>
                                <option>Dados pessoais | Elogio e sugestão</option>
                                <option>Dados pessoais | Outros assuntos</option>`;
    } else if (campoTemaDeContato.value == 'Lojas-físicas') {
        motivoDeContato.innerHTML = `<option selected disabled value="">Selecione</option>
                                <option>Loja física | Atendimento</option>
                                <option>Loja física | Elogio e sugestões</option>
                                <option>Loja física | Esqueci um item em loja</option>
                                <option>Loja física | Expansão de lojas físicas</option>
                                <option>Loja física | Eventos</option>
                                <option>Loja física | Horário de funcionamento</option>
                                <option>Loja física | Segunda via de nota fiscal</option>
                                <option>Loja física | Outros assuntos</option>`;
    } else if (campoTemaDeContato.value == 'Outros-assuntos') {
        motivoDeContato.innerHTML = `<option selected disabled value="">Selecione</option>
                                <option>Outros assuntos | Patrocínio e parcerias</option>
                                <option>Outros assuntos | Decathlon Fundation</option>
                                <option>Outros assuntos | Quero ser uma loja parceira</option>`;
    }
}



verificarMotivoDeContato();
