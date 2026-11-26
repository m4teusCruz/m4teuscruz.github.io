# Portfólio | Mateus Cruz

Site de portfólio pessoal, feito como projeto final da disciplina de front-end web. Ele apresenta quem eu sou, minhas habilidades, meus projetos e meus hobbies (xadrez, animes e mangás).

🔗 **Acesse o site:** https://m4teuscruz.github.io/

## Tecnologias

| Tecnologia | Uso no projeto |
|---|---|
| HTML5 | Estrutura das páginas, com seções semânticas (`header`, `main`, `section`, `footer`) |
| CSS3 | Estilos próprios, animações dos stickers e responsividade com `@media` |
| Bootstrap (somente CSS) | Grade de colunas, navbar e formulário |
| JavaScript | Interações da página (descritas abaixo) |
| GitHub Pages | Hospedagem do site |

## Seções do site

- **Início:** apresentação com saudação de acordo com o horário e minha foto.
- **Sobre mim:** texto de apresentação e lista de habilidades com ícones (Python, JavaScript, Java, C, MySQL, Linux, Git, GitHub, modelagem e prototipação).
- **Projetos:** cards com Gestão de estoque (Python e SQLite), Gerenciador acadêmico (C) e Banco de biblioteca (SQL), cada um com link para o repositório.
- **Hobbies:** xadrez e animes e mangás, com galeria de imagens.
- **Contato:** formulário e botões para GitHub, LinkedIn, Instagram e Facebook.

## Funcionalidades em JavaScript

- **Saudação por horário:** mostra "Bom dia", "Boa tarde" ou "Boa noite" usando `if / else if / else`.
- **Menu do celular:** o botão de três risquinhas abre e fecha o menu.
- **Filtro de projetos:** a função `filtrarProjetos()` mostra só os projetos da tecnologia escolhida (Todos, Python, C ou SQL).
- **Contador de caracteres:** a função `textoContador()` mostra quantos caracteres já foram usados na mensagem (limite de 300).
- **Validação do formulário:** confere se todos os campos foram preenchidos e mostra um aviso. Importante: o formulário **não envia** a mensagem para lugar nenhum, ele só valida.

## Design e responsividade

- Layout responsivo para celular, tablet e computador, com a grade do Bootstrap e 3 pontos de quebra (`@media`) em 991 px, 575 px e 420 px.
- Paleta em tons de azul e tema inspirado em mangá.
- Stickers e GIFs flutuando no fundo, feitos só com CSS (`@keyframes`).
- Fonte **JetBrains Mono** salva no próprio projeto, então o site funciona sem depender de links externos.

## Estrutura do projeto

```
index.html      → página principal
css/            → style.css, bootstrap.min.css e a fonte JetBrains Mono
js/             → script.js
img/            → foto, ícones, stickers e GIFs
```

## Como rodar no computador

1. Baixe ou clone o repositório.
2. Abra o `index.html` no navegador.

Se preferir um servidor local, abra o terminal na pasta do projeto e rode `python -m http.server 8000`. Depois acesse `http://localhost:8000`.

## Publicação

O site é publicado pelo **GitHub Pages**, a partir da branch `main`, na pasta raiz (`/ (root)`)

## Créditos

- Fonte [JetBrains Mono](https://www.jetbrains.com/lp/mono/), licença OFL.
- [Bootstrap](https://getbootstrap.com/), usado apenas pelo CSS.
- Imagens, stickers e GIFs de animes e mangás usados aqui só de forma ilustrativa.

## Autor

**Mateus Cruz**

- GitHub: [m4teusCruz](https://github.com/m4teusCruz)
