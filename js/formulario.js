import {
    salvarCadastros,
    carregarCadastros
} from "./storage.js";
// ===============================
// FORMULÁRIO + LOCALSTORAGE
// ===============================

const formulario =
    document.getElementById("formulario");

if (formulario) {
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome =
            document.getElementById("nome").value;

        const cpf =
            document.getElementById("cpf").value;

        const telefone =
            document.getElementById("telefone").value;

        const cep =
            document.getElementById("cep").value;

        const novoCadastro = {
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            cep: cep
        };

        let cadastros = carregarCadastros();

        cadastros.push(novoCadastro);

        salvarCadastros(cadastros);

        alert("Cadastro realizado com sucesso!");

        formulario.reset();

        mostrarCadastros();
    });
}
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