let fila = []
let opcao = ""

do {
    let pacientes = ""
    for (let i = 0; i < fila.length; i++) {
        pacientes += (i + 1) + ("° - ") + fila[i] + "\n"
    };
    opcao = prompt(
        "pacientes:\n" + pacientes +
        "\nEscolha uma ação:\n1. Novo Paciente\n2. Consultar paciente\n3. Sair"
    )
    switch (opcao) {
        case "1":
            const novoPaciente = prompt("Qual o nome do paciente?")
            fila.push(novoPaciente)
            break
        case "2":
            const pacienteConsultado = fila.shift()
            if (pacienteConsultado) {
                alert(pacienteConsultado + " Foi consultado.")
            } else { alert ("Não há pacientes na fila")
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("opção inválida")
    }
} while (opcao !== "3")