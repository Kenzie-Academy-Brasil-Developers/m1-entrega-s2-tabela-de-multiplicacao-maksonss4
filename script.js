function gerarTabela(){
    let tabela = []
    for(let l = 0; l < 11; l++){
        let linha = []
        for(let c = 0; c < 11; c++){
            linha.push(c * l)
        }
        tabela.push(linha)
    }
    return tabela
}
console.table(gerarTabela())


function gerarTabelaBonus(n){
    let tabela = []
    for(let l = 0; l <= n; l++){
        let linha = []
        for(let c = 0; c <= n; c++){
            linha.push(c * l)
        }
        tabela.push(linha)
    }
    return tabela
}
console.table(gerarTabelaBonus(2))
