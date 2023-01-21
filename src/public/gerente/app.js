const $criarPedidos = document.querySelector("#criarPedido")
const $modal = document.querySelector(".modal")
let main = document.querySelector (".main-content")
const pedidos = document.querySelector(".headerPedidos")
const botaocriar = document.querySelector("#criar")

async function  openModal (edit = false, index = 0) {
    await $modal.classList.toggle("active")
    
    if($modal.classList.contains('active')) {
        console.log('ativo')
        
        main.addEventListener("click", () => {
            console.log("mouse saiu")
            $modal.classList.remove("active")
            
        })
    }

} 

 botaocriar.addEventListener("click", function adicionaPedido(infosDoEvento) {
    
    infosDoEvento.preventDefault();
    console.log("Criado")    


    const list = document.createElement("ul")
    list.innerHTML = `<li>001</li>
                     <li>Servir</li>
                     <li>100</li>
                     <li>22.02.2023</li>
                     <li>Valtemir</li>
                     <li>Ponte</li>
                     <li>900</li> `
    list.classList.add("pedidosList") 
    pedidos.appendChild(list)

})






