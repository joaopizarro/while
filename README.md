# 🔁 Laços de Repetição com `while`

## 📌 Sobre o Projeto
Este projeto tem como objetivo demonstrar o uso do laço de repetição `while`, uma estrutura fundamental na programação que permite executar um bloco de código várias vezes enquanto uma condição for verdadeira.

O `while` é muito utilizado quando **não sabemos exatamente quantas vezes o código será repetido**, mas sabemos qual condição deve ser atendida para continuar a execução.

---

## 🧠 O que é o `while`?

O `while` é uma estrutura de repetição que funciona da seguinte forma:

> Enquanto uma condição for verdadeira (`true`), o código dentro do bloco será executado.

---

## 📍 Estrutura básica

while condição:
    # bloco de código
## ⚙️ Como funciona (Passo a Passo)
- inicialização da variável:
Antes do while, geralmente criamos uma variável de controle.

- Definição da condição:
O while verifica se a condição é verdadeira.

- Execução do bloco de código:
Se a condição for verdadeira, o código dentro do while é executado.

- Atualização da variável:
A variável de controle deve ser atualizada dentro do laço, para evitar repetição infinita.

- Encerramento do laço:
Quando a condição se torna falsa, o laço é finalizado.

## 💻 Exemplo Prático
contador = 1

while contador <= 5:
    print("Número:", contador)
    contador += 1
## 🔎 Explicação:
- Começamos com contador = 1
- O laço continua enquanto contador <= 5
- A cada repetição, somamos 1 ao contador
- O laço para quando o contador chega a 6
⚠️ Atenção: Loop Infinito

Se a variável de controle não for atualizada, o programa pode entrar em um loop infinito.

## ❌ Exemplo errado:
contador = 1

while contador <= 5:
    print(contador)

👉 Nesse caso, o valor nunca muda, então o laço nunca termina.

## ✅ Boas Práticas
- Sempre garantir que a condição do while possa se tornar falsa
- Usar variáveis de controle corretamente
- Evitar loops infinitos sem necessidade
Comentar o código para facilitar o entendimento
## 🎯 Conclusão

O laço while é uma ferramenta poderosa para repetir ações de forma controlada. Ele é ideal para situações onde a quantidade de repetições depende de uma condição, tornando o código mais dinâmico e eficiente.


---
