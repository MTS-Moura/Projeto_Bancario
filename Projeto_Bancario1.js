// 3 Operações: depósito, saque e extrato, sair

let saldo = 0;
let limite = 500;
let limiteSaques = 3; 
let extrato = "";
let numeroSaques = 0;

while(true) {
    let menu = prompt(`
Escolha uma Opção:
====================================
[d] Depósito                       
[s] Saque
[e] Extrato
[q] Sair
====================================
`);

    if(menu == 'd') {
        let valor = parseFloat(prompt("Informe o valor do depósito: R$"))
        if(valor > 0) {
            saldo += valor
            extrato += `Depósito de R$${valor} \n`
            alert(`Depósito de R$${valor} realizado`)
        } 
        else{
         alert("Operação falhou! O valor informado é inválido!")
        }
       

    } else if(menu == 's') {
        valor = parseFloat(prompt("Informe o valor do saque: R$"))
        
        excedeuSaldo = valor > saldo;
        excedeuLimite = valor > limite;
        excedeuSaques = numeroSaques >= limiteSaques;

        if (excedeuSaldo) {
            alert("Operação falhou! Você não tem saldo suficiente")
        } else if (excedeuLimite) {
            alert("Operação falhou! O valor do saque excede o limite")
        } else if (excedeuSaques) {
            alert("Operação falhou! Numero máximo de saques excedidos")
        } else if (valor > 0) {
            saldo -= valor;
            extrato += `Saque R$${valor} \n`
            numeroSaques += 1
            alert(`Saque de  R$${valor} realizado com sucesso`)
        } else {
            alert("Operação falhou! O valor informado é inválido.")
        }
    } else if(menu == "e") {
      mensagem = extrato == true ? "Não foram realizadas movimentações." : extrato
      alert(`
    =========== E X T R A T O ===========
    ${mensagem}             
                        
    SALDO: R$${saldo}  
    ====================================`)
    } else if(menu == "q") {
        alert("Obrigado pela preferência !!!")
      break
    } else {
        alert("Opção inválida, por favor selecione novamente a operação desejada.")
    }
}   

// Depósito: Deve ser possível depositar valores positivos
// Todos os depósitos devem ser armazenados 
// em uma variável e exibidos na operação de extrato.
 
// Saque
// o sistema deve permitir realizar 3 saques diários
// com limite máximo de R$ 500,00 por saque
// Caso o usuário não tenha saldo em conta, 
// o sistema deve exibir uma mensagem informando que não será possível sacar o dinheiro por falta de saldo
// Todos os saques devem ser armazenados em uma variável e exibidos na operação de extrato.

// Extrato
// Essa operação deve listar todos os depósitos e saques realizados na conta
// No fim da listagem deve ser exibido o saldo atual da conta
// Se o extrato estiver em branco, exibir a mensagem: Não foram realizadas movimentações.
// Os valores devem ser exibidos utilizando o formato R$ xxx.xx, exemplo:
// 1500.45 = R$ 1500.45