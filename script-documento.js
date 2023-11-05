// Obtém elementos do DOM
const campoPesquisa = document.getElementById("campoPesquisa");
const tabelaDocumentos = document.getElementById("tabelaDocumentos");
const checkboxSelecionarTodos = document.getElementById("selecionarTodos");
const checkboxesDocumentos = document.querySelectorAll(".selecionarDocumento");

// Função para realizar a pesquisa
function realizarPesquisa() {
    const termoPesquisa = campoPesquisa.value.toLowerCase();

    Array.from(tabelaDocumentos.querySelectorAll("tr")).forEach(function(row) {
        const nomeDocumento = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
        const recebedor = row.querySelector("td:nth-child(3)").textContent.toLowerCase();

        // Verifica se o termo de pesquisa corresponde ao nome do documento ou ao recebedor
        if (nomeDocumento.includes(termoPesquisa) || recebedor.includes(termoPesquisa)) {
            row.style.display = "table-row";
        } else {
            row.style.display = "none";
        }
    });
}

// Adiciona um ouvinte de evento para o campo de pesquisa ao pressionar a tecla "Enter"
campoPesquisa.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        realizarPesquisa();
    }
});

// Adiciona um ouvinte de evento para a tabela para atualizar o botão "Selecionar Todos" ao clicar nas caixas de seleção individuais
tabelaDocumentos.addEventListener("change", function(event) {
    if (event.target.classList.contains("selecionarDocumento")) {
        const allChecked = Array.from(checkboxesDocumentos).every(checkbox => checkbox.checked);
        checkboxSelecionarTodos.checked = allChecked;
    }
});
