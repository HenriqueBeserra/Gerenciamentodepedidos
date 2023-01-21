const $criarPedidos = document.querySelector("#criarPedido")
const $modal = document.querySelector(".modal")
let main = document.querySelector (".main-content")
console.log($criarPedidos)

async function  openModal (edit = false, index = 0) {
   await $modal.classList.toggle("active")
   await main.classList.toggle("active2")
    
    if($modal.classList.contains('active')) {
        console.log('ativo')
        
        main.addEventListener("click", () => {
            console.log("mouse saiu")
            $modal.classList.remove("active")
            main.classList.remove("active2")
        })
    }

} 



