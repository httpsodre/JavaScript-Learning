let filaDeEspera = [];
let opcao = "";

do {
    // Exibe o menu interativo
    let listaPacientes = "Pacientes na fila:\n";
    filaDeEspera.forEach((paciente, index) => {
        listaPacientes += `${index + 1}º ${paciente}\n`;
    });

    opcao = prompt(
        `${listaPacientes}\nEscolha uma opção:\n1. Novo paciente\n2. Consultar paciente\n3. Sair`
    );

    switch (opcao) {
        case "1":
            // Adicionar novo paciente
            const novoPaciente = prompt("Digite o nome do novo paciente:");
            filaDeEspera.push(novoPaciente);
            alert(`${novoPaciente} foi adicionado à fila.`);
            break;

        case "2":
            // Consultar paciente
            if (filaDeEspera.length > 0) {
                const pacienteConsultado = filaDeEspera.shift();
                alert(`Paciente consultado: ${pacienteConsultado}`);
            } else {
                alert("Não há pacientes na fila.");
            }
            break;

        case "3":
            // Sair do programa
            alert("Encerrando o programa...");
            break;

        default:
            alert("Opção inválida. Tente novamente.");
    }
} while (opcao !== "3");