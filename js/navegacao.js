// ===============================
// SPA - HISTORY API
// ===============================

const secoes =
    document.querySelectorAll("#conteudo > section");

const linksRota =
    document.querySelectorAll("[data-rota]");


function mostrarPagina(pagina) {

    // Esconde todas as seções
    secoes.forEach(function (secao) {

        secao.hidden = true;

    });


    // Mostra a seção escolhida
    const secaoSelecionada =
        document.getElementById(pagina);

    if (secaoSelecionada) {

        secaoSelecionada.hidden = false;

    } else {

        const inicio =
            document.getElementById("inicio");

        if (inicio) {
            inicio.hidden = false;
        }

    }

}


// ===============================
// NAVEGAÇÃO COM HISTORY API
// ===============================

linksRota.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const pagina =
            link.getAttribute("data-rota");

        history.pushState(
            {
                pagina: pagina
            },
            "",
            "?pagina=" + pagina
        );

        mostrarPagina(pagina);

    });

});


// ===============================
// BOTÕES VOLTAR / AVANÇAR
// ===============================

window.addEventListener("popstate", function (event) {

    const pagina =
        event.state?.pagina || obterPaginaDaURL();

    mostrarPagina(pagina);

});


// ===============================
// IDENTIFICAR PÁGINA PELA URL
// ===============================

function obterPaginaDaURL() {

    const parametros =
        new URLSearchParams(window.location.search);

    return parametros.get("pagina") || "inicio";

}


// ===============================
// CARREGAMENTO INICIAL
// ===============================

const paginaInicial =
    obterPaginaDaURL();

mostrarPagina(paginaInicial);