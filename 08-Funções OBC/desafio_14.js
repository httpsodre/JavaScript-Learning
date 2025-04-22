function areaDoTriangulo() {
    const base = prompt("Qual a base do triângulo?")
    const altura = prompt("Qual a altura do triângulo?")
    return base * altura / 2
}

function areaDoRetangulo() {
    const base = prompt("Qual a base do retânguo?")
    const altura = prompt("Qual a altura do retângulo?")
    return base * altura
}

function areaDoQuadrado() {
    const lado = prompt("Qual a lado do quadrado?")
    return lado * lado
}

function areaDoTrapézio() {
    const baseMaior = parseFloat(prompt("Qual a base Maior do trapézio?"))
    const baseMenor = parseFloat(prompt("Qual a base Menor do trapézio?"))
    const altura = prompt("Qual a altura do trapézio?")
    return (baseMaior + baseMenor) * altura / 2
}

function areaDoCirculo() {
    const pi = 3.14
    const raio = prompt("Qual o raio do circulo?")
    return pi * (raio * raio)
}

function exibirMenu() {
    return prompt(
        "Calculadora Geométrica\n" +
        "1. Calcular área do triangulo:\n" +
        "2. Calcular área do retângulo:\n" +
        "3. Calcular área do quadrado:\n" +
        "4. Calcular área do trapézio:\n" +
        "5. Calcular área do circulo:\n" +
        "6. Sair"
    )
}

function executar() {
    let opcao = ""
    do {
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case "1":
                resultado = areaDoTriangulo()
                break
            case "2":
                resultado = areaDoRetangulo()
                break
            case "3":
                resultado = areaDoQuadrado()
                break
            case "4":
                resultado = areaDoTrapézio()
                break
            case "5":
                resultado = areaDoCirculo()
                break
            case "6":
                alert ("Saindo...")
                break
            default:
                alert ("Opção invalida.")  
                break  
        }

        if (resultado) {
            alert ("Resultado: " + resultado)
        }

    } while (opcao !== 6)
}

executar()