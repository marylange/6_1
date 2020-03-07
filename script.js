document.body.onload = newElemento;
// document.getElementById("estado").innerHTML += "<h1></h1>";
function addElemento() {
  let estadosBrasil = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins", "Distrito Federal"];
  let tamanho = estadosBrasil.length;
  let estado = document.getElementById("estado");
  let newElemento = document.createElement("option");
  newElemento.setAttribute("class", "nameStates");

  for (let i = 0; i < tamanho; i++) {
    if (estadosBrasil[i] == i) {
      let newElemento = document.createElement("option");
      estado.appendChild(newElemento);
      estadosBrasil[i].innerHTML = "option";
    }
  }
}







// declarar a funçao
// declarar o Array
// verificar tamanho do Array
//criar elemento option
// iterar no for
//condicao
//criar
