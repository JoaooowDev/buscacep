
const buscar = document.getElementById("Buscar")
const resCEP = document.getElementById("resCEP")
const resLogradouro = document.getElementById("resLogradouro")
const resBairro = document.getElementById("resBairro")
const resLocalidade = document.getElementById("resLocalidade")
const resDDD = document.getElementById("resDDD")

const preenchimento = (elementos) => {

    resCEP.value = elementos.cep
    resBairro.value = elementos.bairro
    resLogradouro.value = elementos.logradouro
    resLocalidade.value = elementos.localidade
    resDDD.value = elementos.ddd
}

buscar.addEventListener('click', async () => {

    resCEP.value = ""
    resBairro.value = ""
    resLogradouro.value = ""
    resLocalidade.value = ""
    resDDD.value = ""

    const cep = document.getElementById("CEP").value
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const dados = await fetch(url)
    const elementos = await dados.json()
    preenchimento(elementos)
})