export function salvarCadastros(cadastros) {
    localStorage.setItem(
        "cadastros",
        JSON.stringify(cadastros)
    );
}


export function carregarCadastros() {

    return JSON.parse(
        localStorage.getItem("cadastros")
    ) || [];

}