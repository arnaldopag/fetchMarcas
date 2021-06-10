const requisicao = fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')

var dado = requisicao.then(function(resposta){
    return resposta.json()
})

dado.then(function(marca){
    return fillDataList(marca)
})

function fillDataList(marcas){

let dataList = document.querySelector('#listaMarcas')

     for(const i of marcas){
        let option = document.createElement('option')
        option.value = i.nome;
        dataList.appendChild(option)
     }  
 }
