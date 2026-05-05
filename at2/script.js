let soma = 0;
let quantidade = 0;
let nota = Number(prompt("Digite uma nota (negativo para sair):"));

while (nota >= 0) {
    soma += nota;
    quantidade++;
    nota = Number(prompt("Digite outra nota (negativo para sair):"));
}

if (quantidade > 0) {
    alert("Média: " + (soma / quantidade));
} else {
    alert("Nenhuma nota foi digitada");
}