
# Alura ONE G8 BR - Tarefa da Fase 1: Challenge amigo secreto
## Objetivo:
*Neste desafio faça um aplicativo em JavaScript, que permita aos jogadores digitar nomes de amigos em uma lista para, em seguida, realizar um sorteio aleatório e determinar quem é o "amigo secreto".*

## Instruções:
- O jogador deverá adicionar nomes por meio de um campo de texto e de um botão "Adicionar".
- Os nomes inseridos serão exibidos em uma lista visível na página, e ao finalizar, um botão "Sortear Amigo" selecionará um dos nomes de forma aleatória, exibindo o resultado na tela.

## Funcionalidades:
 - Adicionar nomes: Os jogadores escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".
- Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.
- Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.
- Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.

## Roteiro:
Nome do arquivo em JavaScript: "app.js".
- [x] Crie um array para armazenar os nomes.
- linha 1 -->`let listaAmigos = [];`.
- [x] Desenvolva uma função que permita ao jogador inserir um nome no campo de texto e adicioná-lo à lista de amigos criada anteriormente.
- linha 3 a 38 -->`function adicionarAmigo(){} e -->let amigo = document.querySelector()`.
- [x] Crie uma função que percorra o array amigos e adicione cada nome como um elemento `<li>` dentro de uma lista HTML, use innerHTML para limpar a lista antes de adicionar novos elementos.
- linha 41 a 50 -->`function exibirAmigos(){}`.
- [x] Escreva uma função que selecione aleatoriamente um dos nomes armazenados.
- linha 57 a 67 -->`function sortearAmigo(){}`.
- [x] Escreva uma função que selecione os nomes armazenados. 
- linha 68 a 71 -->`function limparCampo(){}`.
- [x] Escreva uma função para um novo sorteio. 
- linha 72 a 82 -->`function novoSorteio(){}`.
 
Nome do arquivo em HTML: "index.html".

Nome do arquivo em CSS: "style.css".

Nome do arquivo em Markdown: "README.md".

Nome da pasta ou diretório onde está armazenado tudo que pode ser usado por todos esse arquivos: "assets".

Nome dos arquivos de imagens do diretório "assets":
"Tela inicio jogo.png", "amigo-secreto.png" e "tecla com icone de jogar.png".

 ## 🔄 *Mudanças*
- Foi adicionado um botão de "Novo Sorteio".
- Ao invés de estático a cor do botão sortear só terá cor e estará habilitado a partir de dois nomes adicionados.
- O botão "Adicionar" agora tem cor igual ao sortear ao passar o mouse encima.
- A cor do "amigo sorteado" foi mudada para `azul (#4B69FD)` para combinar com as cores.

## 📘 Documentação
- [Sintaxe básica de gravação e formatação no GitHub](https://docs.github.com/pt/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [css](https://www.w3schools.com/css/default.asp)
- [javaScript](https://www.w3schools.com/js/default.asp)
- [HTML](https://www.w3schools.com/html/default.asp)
- [DeepSeek](https://chat.deepseek.com/)
- [ChatGPT](https://chatgpt.com/)
- [Curso git e Github](https://cursos.alura.com.br/course/git-github-compartilhando-colaborando-projetos)
- [Como escrever um README incrível no seu Github](https://www.alura.com.br/artigos/escrever-bom-readme)

  ## 📽️ Video com a explicação deste jogo no YouTube
  - [youtube](https://youtu.be/) Obs.: Completar o link quando houver um video seu sobre este aplicativo para o Youtube.

<img src="assets/Tela inicio jogo.png">
