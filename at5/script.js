let saldo = 1000;
let saque = Number(prompt("Digite o valor do saque:"));

while (saque > saldo) {
    alert("Saldo insuficiente!");
    saque = Number(prompt("Digite outro valor:"));
}

saldo -= saque;
alert("Saque realizado. Saldo restante: " + saldo);