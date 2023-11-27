document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("selecionarTodos").addEventListener("change", function () {
      const checkboxes = document.querySelectorAll(".select-checkbox");
      checkboxes.forEach(function (checkbox) {
        checkbox.checked = this.checked;
      }, this);
    });

    document.getElementById("imprimirDocumentos").addEventListener("click", function () {
      const checkboxes = document.querySelectorAll(".select-checkbox");
      let documentosSelecionados = [];

      checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
          documentosSelecionados.push(checkbox.parentElement.parentElement);
        }
      });

      if (documentosSelecionados.length > 0) {
        // Ocultar outros elementos ou estilos de página, se necessário
        // ...

        // Imprimir os documentos selecionados
        documentosSelecionados.forEach(function (documento) {
          documento.style.display = "block";
        });

        window.print();

        // Restaurar a exibição dos documentos após a impressão
        documentosSelecionados.forEach(function (documento) {
          documento.style.display = "table-row";
        });
      } 
    });

    document.getElementById("inputPesquisa").addEventListener("input", function() {
      // Função para filtrar a tabela
      let filtro = this.value.toLowerCase();
      let linhas = document.querySelectorAll(".table tbody tr");
  
      linhas.forEach(function(linha) {
        let texto = linha.textContent.toLowerCase();
        if (texto.includes(filtro)) {
          linha.style.display = "table-row";
        } else {
          linha.style.display = "none";
        }
      });
    });

    // Contagem de status
    const concluidoCount = document.querySelectorAll('.concluido').length;
    const andamentoCount = document.querySelectorAll('.andamento').length;
    const urgenteCount = document.querySelectorAll('.urgente').length;

    // Contagem total
    const totalCount = concluidoCount + andamentoCount + urgenteCount;

    // Atualiza as contagens na legenda
    document.getElementById('concluidoCount').textContent = concluidoCount;
    document.getElementById('andamentoCount').textContent = andamentoCount;
    document.getElementById('urgenteCount').textContent = urgenteCount;
    document.getElementById('totalCount').textContent = totalCount;
  });