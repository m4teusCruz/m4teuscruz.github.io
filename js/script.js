// Saudação de acordo com a hora (estrutura if / else if / else)
let hora = new Date().getHours();
let saudacao;

if (hora < 12) {
    saudacao = "Bom dia!";
} else if (hora < 18) {
    saudacao = "Boa tarde!";
} else {
    saudacao = "Boa noite!";
}

document.getElementById("saudacao").textContent = saudacao;

// Validação do formulário de contato
document.getElementById("formContato").addEventListener("submit", function (evento) {
    evento.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos.");
    } else {
        alert("Obrigado, " + nome + "! Sua mensagem foi enviada.");
        this.reset();
        contador.textContent = textoContador("", 300);
    }
});

// Menu do celular: abre e fecha ao clicar no botão (no lugar do JS do Bootstrap)
let botaoMenu = document.querySelector(".navbar-toggler");
let menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("show");
});

// Fecha o menu ao clicar em um link
let links = document.querySelectorAll(".nav-link");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("show");
    });
});

// Função 1: filtrar projetos por tecnologia (laço for + if)
function filtrarProjetos(tecnologia) {
    let projetos = document.querySelectorAll(".projeto");

    for (let i = 0; i < projetos.length; i++) {
        let tecnologias = projetos[i].dataset.tec.split(" ");

        if (tecnologia === "todos" || tecnologias.includes(tecnologia)) {
            projetos[i].style.display = "";
        } else {
            projetos[i].style.display = "none";
        }
    }
}

let botoesFiltro = document.querySelectorAll(".botao-filtro");

botoesFiltro.forEach(function (botao) {
    botao.addEventListener("click", function () {
        filtrarProjetos(botao.dataset.filtro);

        botoesFiltro.forEach(function (outro) {
            outro.classList.remove("ativo");
        });
        botao.classList.add("ativo");
    });
});

// Função 2: contador de caracteres da mensagem de contato
function textoContador(texto, limite) {
    return texto.length + "/" + limite + " caracteres";
}

let campoMensagem = document.getElementById("mensagem");
let contador = document.getElementById("contador");

campoMensagem.addEventListener("input", function () {
    contador.textContent = textoContador(campoMensagem.value, 300);
});
