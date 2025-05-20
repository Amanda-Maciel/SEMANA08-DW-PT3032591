/*Crie um arquivo Questao_03.js
No arquivo, declare alguma(s) estrutura(s)(exemplo: variável) para:
- Receber a string “João da Silva” (nome de um aluno);
- Receber um inteiro 7 (primeira nota do aluno);
- Receber um real 8.5 (segunda nota do aluno);
- Receber o valor da multiplicação da primeira nota do aluno por 0.6;
- Receber o valor da multiplicação da segunda nota do aluno por 0.4;
- Receber a soma destas últimas variáveis.
- Crie uma mensagem de alerta para informar o nome e as notas individuais do aluno.
- Crie uma mensagem de alerta para informar a nota total do aluno
- Mostre os dados de, no mínimo, 3 alunos */

let nome = "João da Silva";

let notaUm = 7;

let notaDois = 8.5;

let mult = notaUm * 0.6;

let mult2 = notaDois * 0.4;

let soma = mult + mult2;

alert(`Nome do aluno: ${nome}\nPrimeira nota: ${notaUm}\nSegunda nota: ${notaDois}`);
alert(`Nota total de ${nome}: ${soma.toFixed(2)}`);

let nome2 = "Amanda Maciel";

let notaUm2 = 10;

let notaDois2 = 10;

let mult12 = notaUm2 * 0.6;

let mult22 = notaDois2 * 0.4;

let soma2 = mult12 + mult22;

alert(`Nome do aluno: ${nome2}\nPrimeira nota: ${notaUm2}\nSegunda nota: ${notaDois2}`);
alert(`Nota total de ${nome2}: ${soma2.toFixed(2)}`);

let nome3 = "Soraya Gomes";

let notaUm3 = 10;

let notaDois3 = 10;

let mult3 = notaUm3 * 0.6;

let mult33 = notaDois3 * 0.4;

let soma3 = mult3 + mult33;

alert(`Nome do aluno: ${nome3}\nPrimeira nota: ${notaUm3}\nSegunda nota: ${notaDois3}`);
alert(`Nota total de ${nome3}: ${soma3.toFixed(2)}`);