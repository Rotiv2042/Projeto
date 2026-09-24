// ===============================
// MODAL "SAIBA MAIS"
// ===============================

const botao =
    document.getElementById("botao");

const modal =
    document.getElementById("modal");

const fecharModal =
    document.getElementById("fechar-modal");


if (botao && modal && fecharModal) {

    botao.addEventListener("click", function () {

        modal.classList.add("ativo");

    });


    fecharModal.addEventListener("click", function () {

        modal.classList.remove("ativo");

    });

}

// ===============================
// HISTÓRICO DE CADASTROS
// ===============================

function mostrarCadastros() {

    const lista =
        document.getElementById("lista-mensagens");

    if (!lista) {
        return;
    }

    const cadastros = carregarCadastros();

    lista.innerHTML = "";

    cadastros.forEach(function (cadastro) {

        const div =
            document.createElement("div");

        div.className = "mensagem-salva";

        div.innerHTML = `
            <h3>${cadastro.nome}</h3>

            <p>
                <strong>CPF:</strong>
                ${cadastro.cpf}
            </p>

            <p>
                <strong>Telefone:</strong>
                ${cadastro.telefone}
            </p>

            <p>
                <strong>CEP:</strong>
                ${cadastro.cep}
            </p>
        `;

        lista.appendChild(div);

    });

}
mostrarCadastros();
// ===============================
// MENU HAMBÚRGUER
// ===============================

const menuHamburguer =
    document.querySelector(".menu-hamburguer");

const menu =
    document.querySelector(".menu");


if (menuHamburguer && menu) {

    menuHamburguer.addEventListener("click", function () {

        menu.classList.toggle("ativo");

    });

}


// ===============================
// MODAL DOS PROJETOS
// ===============================

const botoesProjeto =
    document.querySelectorAll(".botao-projeto");

const modalProjeto =
    document.getElementById("modal-projeto");

const fecharModalProjeto =
    document.getElementById("fechar-modal-projeto");

const tituloModalProjeto =
    document.getElementById("titulo-modal-projeto");

const textoModalProjeto =
    document.getElementById("texto-modal-projeto");


if (
    botoesProjeto.length > 0 &&
    modalProjeto &&
    fecharModalProjeto &&
    tituloModalProjeto &&
    textoModalProjeto
) {

    botoesProjeto.forEach(function (botaoProjeto) {

        botaoProjeto.addEventListener("click", function () {

            const projeto =
                botaoProjeto.getAttribute("data-projeto");


            if (projeto === "1") {

                tituloModalProjeto.textContent =
                    "Projeto 1 - Desenvolvimento de Sistemas";

                textoModalProjeto.textContent =
                    "Projeto voltado para o desenvolvimento de sistemas utilizando tecnologias de programação.";

            }


            if (projeto === "2") {

                tituloModalProjeto.textContent =
                    "Projeto 2 - Site Institucional";

                textoModalProjeto.textContent =
                    "Site institucional desenvolvido para apresentar informações, serviços e conteúdos de uma organização.";

            }


            if (projeto === "3") {

                tituloModalProjeto.textContent =
                    "Projeto 3 - Aplicativo Mobile";

                textoModalProjeto.textContent =
                    "Aplicativo mobile pensado para facilitar o acesso dos usuários a informações e serviços.";

            }


            modalProjeto.classList.add("ativo");

        });

    });


    fecharModalProjeto.addEventListener("click", function () {

        modalProjeto.classList.remove("ativo");

    });

}
