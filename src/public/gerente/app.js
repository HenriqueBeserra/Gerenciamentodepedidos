////////////////////////////////////////////////////////////////
//Informações da tela
const $criarPedidos = document.querySelector("#criarPedido");
const $modal = document.querySelector(".modal");
let main = document.querySelector (".main-content");
const pedidos = document.querySelector(".headerPedidos");
const botaocriar = document.querySelector(".formulário-pedidos");
const input = document.querySelector(".input");

const dateControl = document.querySelector('input[type="date"]');
const $revista = document.querySelector("#revista");
const $quantidade = document.querySelector("#quantidade");
const $emissor = document.querySelector("#emissor");
const $recebedor = document.querySelector("#Recebedor");



///////////////////////////////////
//Abrindo o modal de pedidos
const liModal = document.querySelector("#criarPedido")
liModal.addEventListener('click', openModal)

async function  openModal () {
    await $modal.classList.toggle("active")
    
    if($modal.classList.contains('active')) {
        console.log('ativo');
        
        main.addEventListener("click", () => {
            console.log("mouse saiu");
            $modal.classList.remove("active");
            
        })
    }

} 

///////////////////////////////////////////////////
// Construção da lógica de gerenciamento dos dados

class Pedido {
    constructor (revista, quantidade, emissor, recebedor, data){
        this.revista = revista,
        this.quantidade = quantidade,
        this.recebedor = recebedor,
        this.emissor = emissor,
        this.data = data
        this.bd = []
    }

    geraPedido(){

        let informaçãoPedido = {
            'revista' : this.revista,
            'quantidade' : this.quantidade,
            'emissor'   : this.emissor,
            'recebedor' : this.recebedor,
            'data' : this.data,
            'valor' : (this.quantidade * 9)
        }

        this.bd.unshift(informaçãoPedido)
        console.log(this.bd)

    }

}



///////////////////////////////////
// Colhendo os dados do pedido

botaocriar.addEventListener("submit", function adicionaInfo(infosDoEvento){

    infosDoEvento.preventDefault();

    let conteudo = new Pedido($revista.value, $quantidade.value, $emissor.value, $recebedor.value, dateControl.value)
    conteudo.geraPedido();
})

///////////////////////////////////

import { testando } from "../app/dados/date.js";

// testando();







// Responsárel por instalar e gerencciar as verçoes do node para obter o fetch

// export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
// [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm  
// nvm install v19.0.0 --experimental-fetch