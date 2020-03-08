window.onload = function addElemento() {
  let estadosBrasil = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins", "Distrito Federal"];
  let tamanho = estadosBrasil.length;
  let estado = document.getElementById("estado");

  for (let i = 0; i < tamanho; i++) {
    let newElemento = document.createElement("option");
    newElemento.innerText = estadosBrasil[i];
    estado.appendChild(newElemento);
  }
}

//Caso alguma das condições for inválida no momento do envio do
//formulário, exibir mensagem de erro contextualizada.

let inputElemento = document.getElementsByTagName("input");
function pararEventos(evento) {
  evento.preventDefault(inputElemento);
}
