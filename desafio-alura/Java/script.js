var textoInput = document.querySelector("#text1");

function cifrar(){
 var texto = textoInput.value
 var cifrar = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")
 //tag replace serve para substituição, onde houver a letra 'e' ela ira substituir por 'enter', o 'g' serve para mostrar que é global e não apenas a primeira vez que aparecer a letra 'e'

 document.getElementById("esperando-mensagem").innerHTML = '<textarea readonly id="texto-saida">' + cifrar + '</textarea>' + '<button onclick="copiar()" id="btn-copiar">Copiar</button>'
}

function descifrar(){
//var texto = document.getElementById("texto-saida").value da errado pq vc só consegue descifrar textos antes cifrados :(
var texto = textoInput.value
var texto1 = texto.normalize("NFD");
var descifrar = texto1.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u") 

document.getElementById("esperando-mensagem").innerHTML = '<textarea readonly id="texto-saida">' + descifrar + '</textarea>' + '<button onclick="copiar()" id="btn-copiar">Copiar</button>'
}


document.getElementById('btn-copiar').addEventListener('click', copiar);
function copiar() {
  document.querySelector("#texto-saida").select();
  document.execCommand("copy");
  alert("Texto copiado");
}
