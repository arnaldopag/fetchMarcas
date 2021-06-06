const requisicao = fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')

var dado = requisicao.then(function(resposta){
    return resposta.json()
})

dado.then(function(marca){
    console.log(marca[0].nome)
    console.log(marca[0].codigo)
})