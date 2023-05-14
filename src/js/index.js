// O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imgBotaoAlterarTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    const darkModeOn = body.classList.contains("dark-mode");

    body.classList.toggle("dark-mode");

    if (darkModeOn) {
        imgBotaoAlterarTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imgBotaoAlterarTema.setAttribute("src", "./src/imagens/moon.png");
    }
});