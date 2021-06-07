const requisicao = fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')

var dado = requisicao.then(function(resposta){
    return resposta.json()
})

dado.then(function(marca){
    return fillDataList(marca)
})



function fillDataList(marcas){
    var nomeMarcas = []

    for(let i of marcas){
        nomeMarcas.push(i.nome)
    }
    let dataList = document.querySelector('#listaMarcas')
    nomeMarcas.forEach(function(data){
        let option = document.createElement('option')
        option.value = data
        dataList.appendChild(option)
    });
    }
