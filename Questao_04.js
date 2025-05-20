class Aluno { //criei uma classe aluno
    constructor(primeiroNome, segundoNome, nota1, nota2) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    nomeCompleto() { //função que retorna nome completo
        return `${this.primeiroNome} ${this.segundoNome}`;
    }

    media() {
        return (this.nota1 * 0.6) + (this.nota2 * 0.4);
    }

    situacao() {
        return this.media() > 6 ? "Aprovado!" : "Reprovado!";
    }
}

let alunos = [
    new Aluno("Amanda", "Silva", 10, 10),
    new Aluno("Soraya", "Lima", 9, 9),
    new Aluno("Gustavo", "Souza", 2, 2)
];

for (let i = 0; i < alunos.length; i++) {
    let aluno = alunos[i];
    alert(`Nome: ${aluno.nomeCompleto()}\nMédia: ${aluno.media().toFixed(2)}\nSituação: ${aluno.situacao()}`);
}
