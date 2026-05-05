## 📌 Atividade 5 – Saque bancário

**O que faz:**  
Permite sacar dinheiro apenas se houver saldo suficiente.

**Como funciona:**  
- O programa começa com um saldo inicial  
- O usuário digita o valor que deseja sacar  
- Se o valor for maior que o saldo, ele pede outro valor  
- Repete isso até o valor ser válido  
- Quando o valor for válido, o saque é feito e o saldo é atualizado  

**Ideia do código:**
```javascript
while (saque > saldo)

Importante:
Essa verificação impede que o usuário saque mais dinheiro do que possui.