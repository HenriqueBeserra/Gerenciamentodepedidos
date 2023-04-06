


// function loadLista() {
    
//     bd.forEach((element, id) => {
        
//         let valorRevista = bd[id].quantidade * 9
//         var valorFormatado = valorRevista.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

//         const list = document.createElement("ul")
    
//         list.innerHTML = `<li>${bd[id].numero}</li>
//                          <li>${bd[id].revista}</li>
//                          <li>${bd[id].quantidade}</li>
//                          <li>${bd[id].data}</li>
//                          <li>${bd[id].emissor}</li>
//                          <li>${bd[id].recebedor}</li>
//                          <li>${valorFormatado}</li> `
        
//         list.classList.add("pedidosList") 
    
//         console.log($revista.value);
        
//         pedidos.append(list);

//     })


import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xjwajutqickmcxuazgxq.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhqd2FqdXRxaWNrbWN4dWF6Z3hxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQwMzc1OTcsImV4cCI6MTk4OTYxMzU5N30.FQqEFw8zFjSk9IhpBJFDyi-yWCaiYxOqieH51Fcbdsw"
const supabase = createClient(supabaseUrl, supabaseKey)

export const bancodeDados = {
    getPedido: async () => {

        
        let { data, error } = await supabase
        .from('Pedidos')
        .select('*')

        if (error){
            console.log(error)
            return
        }
        
        return data

    },

    setPedido : async ($revista, $quantidade, $recebedor, $emissor, $data, $valor) => {

        const { data, error } = await supabase
        .from('Pedidos')
        .insert([{
            
            revista : $revista, 
            quantidade : $quantidade, 
            recebedor : $recebedor,
            emissor : $emissor,
            data : $data,
            valor : $valor 
 
            
        }])
        if (error){
            console.log(error)
            return
        }


    },

    updatePedido : async ($quantidade, $id) => {

        const { error } = await supabase
        .from('Pedidos')
        .update({quantidade: $quantidade})
        .eq('id', $id)

        if (error){
            console.log(error)
            return
        }

    },

    deletePedido : async ($quantidade, $id) => {

       
        const { error } = await supabase
        .from('Pedidos')
        .delete()
        .eq('id', $id)


        if (error){
            console.log(error)
            return
        }

    }



}

export async function testando(){
    
    let teste = await bancodeDados.getPedido()
    console.log(teste)
}

testando()