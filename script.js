// Obtém todos os elementos com a classe "dropdown"
const dropdowns = document.querySelectorAll('.dropdown');

// Adiciona um ouvinte de eventos de clique a cada elemento com a classe "dropdown"
dropdowns.forEach((dropdown) => {
    // Encontra o elemento de conteúdo suspenso dentro do elemento "dropdown"
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    
    // Adiciona um ouvinte de eventos de clique ao elemento "dropdown"
    dropdown.addEventListener('click', () => {
        // Verifica se o conteúdo suspenso está atualmente visível
        const isVisible = window.getComputedStyle(dropdownContent).display !== 'none';
        
        // Alterna a visibilidade do conteúdo suspenso
        if (isVisible) {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const prevMonthBtn = document.getElementById("mesAnterior");
    const nextMonthBtn = document.getElementById("mesSeguinte");
    const mesAno = document.getElementById("mesAno");
    const corpoCalendario = document.getElementById("corpoCalendario");

    let dataAtual = new Date();
    let mesAtual = dataAtual.getMonth();
    let anoAtual = dataAtual.getFullYear();

    function atualizarCalendario() {
        corpoCalendario.innerHTML = "";

        // Calcular o número de dias no mês atual
        const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();

        // Calcular o dia da semana do primeiro dia do mês atual
        const primeiroDiaSemana = new Date(anoAtual, mesAtual, 1).getDay();

        mesAno.textContent = `${getNomeMes(mesAtual)} ${anoAtual}`;

        let dia = 1;

        for (let i = 0; i < 6; i++) {
            const linha = document.createElement("tr");

            for (let j = 0; j < 7; j++) {
                const celula = document.createElement("td");

                if (i === 0 && j < primeiroDiaSemana) {
                    celula.textContent = "";
                } else if (dia <= diasNoMes) {
                    celula.textContent = dia;
                    // Você pode adicionar classes ou estilos personalizados aqui conforme necessário.
                    dia++;
                }

                linha.appendChild(celula);
            }

            corpoCalendario.appendChild(linha);
        }
    }

    function getNomeMes(indiceMes) {
        const nomesMeses = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];
        return nomesMeses[indiceMes];
    }

    prevMonthBtn.addEventListener("click", function() {
        if (mesAtual === 0) {
            anoAtual--;
            mesAtual = 11;
        } else {
            mesAtual--;
        }
        atualizarCalendario();
    });

    nextMonthBtn.addEventListener("click", function() {
        if (mesAtual === 11) {
            anoAtual++;
            mesAtual = 0;
        } else {
            mesAtual++;
        }
        atualizarCalendario();
    });

    atualizarCalendario();
});

