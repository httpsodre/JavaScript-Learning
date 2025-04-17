const imoveis = []
let opcao = ""

do{
    opcao = prompt(
        "Bem-vindo(a) ao Cadastro de imoveis\n" + 
        "Total de imoveis: " + imoveis.length +
        "\n\nEscolha uma opção:\n1. Novo imovel\n2. Lista de imoveis\n3. Sair")
    
    switch(opcao){
        case "1":
            const imovel ={}
            imovel.proprietario = prompt ("Informe o nome do proprietario:")
            imovel.quarto = parseFloat(prompt ("Informe o nome do proprietario:"))
            imovel.banheiro = parseFloat(prompt ("Informe o nome do proprietario:"))
            imovel.garagem = prompt ("O imovel possui garagem? (sim/não)")

            const confirma = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quarto +
                "\nBanheiros: " + imovel.banheiro +
                "\nGaragem: " + imovel.garagem
            )
            if (confirma){
                imoveis.push(imovel)
            }

            break    
        case "2":
            for (let i = 0; i < imoveis.length; i++){
                alert (
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quarto +
                    "\nBanheiros: " + imoveis[i].banheiro +
                    "\nPossui garagem? " + imoveis[i].garagem
                )
            }
            break
        case "3":
            alert ("Saindo...")
            break
        default:
            alert ("Opção invalida") 
            break  
        
        }

} while (opcao !== "3")