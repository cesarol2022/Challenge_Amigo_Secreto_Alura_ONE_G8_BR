let listaAmigos = [];

function adicionarAmigo(){
    let amigo = document.querySelector('input').value;
    if(!amigo){
        Swal.fire({
            title: "Erro ao digitar nome!",
            text: "Por favor digite um nome válido.",
            icon: "error",
            confirmButtonText: "OK",
            timer: 3000
          });
          return;

    }
    for(i=0;i<listaAmigos.length;i++){
        if(amigo == listaAmigos[i]){
            Swal.fire({
                title: "Não pode digitar o mesmo nome da pessoa mais de 1 vez!",
                text: "Se for outra pessoa por favor digite também o sobrenome",
                icon: "error",
                confirmButtonText: "OK",
                timer: 3200
              });
              return;
        }
    }

    listaAmigos.push(amigo);
    for(let i = 0;i<listaAmigos.length;i++){
        exibirAmigos('#listaAmigos',`${listaAmigos}`);
        }
        if(listaAmigos.length>1){
            document.getElementById('sortearAmigo').disabled = false;
        }
    
    limparCampo();
    }
    

function exibirAmigos() {
    let listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaAmigos[i];
        listaHTML.appendChild(item);
    }
}
function exibeSorteado(tag,texto){
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
     }


function sortearAmigo(){
    let amigoSorteado = listaAmigos[Math.floor(Math.random()* listaAmigos.length)];
    // testes
    // console.log(amigoSorteado);
    // console.log(listaAmigos);
    exibeSorteado('#resultado',`O amigo sorteado é: ${amigoSorteado} `);
     document.getElementById('sortearAmigo').setAttribute('disabled', true);
     document.getElementById('novoSorteio').disabled = false;
     document.getElementById('button-add').setAttribute('disabled', true);
     document.getElementById('amigo').setAttribute('disabled', true);
}
function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = '';
}
function novoSorteio(){
    let listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML = "";
    exibeSorteado('#resultado','');
    limparCampo();
    document.getElementById('button-add').disabled = false;
    document.getElementById('amigo').disabled = false;
    document.getElementById('novoSorteio').setAttribute('disabled', true);
    listaAmigos = [];

}
