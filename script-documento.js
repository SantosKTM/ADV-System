document.getElementById("selecionarTodos").addEventListener("change", function () {
    const checkboxes = document.querySelectorAll(".selecionarDocumento");
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = this.checked;
    }, this);
});


document.getElementById("imprimirDocumentos").addEventListener("click", function () {
    const checkboxes = document.querySelectorAll(".selecionarDocumento");
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
    } else {
        alert("Nenhum documento selecionado para impressão.");
    }
});

function performSearch() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var table = document.getElementById("table-container");
    var rows = table.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var match = false;

        for (var j = 0; j < cells.length; j++) {
            var cellText = cells[j].textContent.toLowerCase();

            if (cellText.indexOf(input) > -1) {
                match = true;
                break;
            }
        }

        if (match) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

function onKeyPress(event) {
    if (event.key === "Enter") {
        performSearch();
    }
}
