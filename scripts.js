/*
const nome = "Carlos";
const idade = 20;
const estudante = true;
console.log(nome);
console.log(idade);
console.log(estudante);
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
    
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
*/

/*
const nomes = [
    "Grasielle",
    "Fernanda",
    "Bruno",
    "Leonardo",
];
for (let cont = 0; cont < nomes.length; cont++) {
    console.log(nomes[cont]);
}

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}
const media = calcularMedia(8, 7);
console.log(media);

if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}
*/


// 1. Apresentação pessoal
console.log("--- Ex 1 ---");
const nome1 = "Grasielle";
const idade1 = 20;
const cidade1 = "São Paulo";
const profissao1 = "Estudante";
console.log(`Olá, meu nome é ${nome1}, tenho ${idade1} anos, moro em ${cidade1} e sou ${profissao1}.`);

// 2. Operações matemáticas
console.log("\n--- Ex 2 ---");
const n1 = 10;
const n2 = 5;
console.log("Soma:", n1 + n2);
console.log("Subtração:", n1 - n2);
console.log("Multiplicação:", n1 * n2);
console.log("Divisão:", n1 / n2);

// 3. Conversor de idade
console.log("\n--- Ex 3 ---");
const idadeAnos = 20;
const mesesVividos = idadeAnos * 12;
console.log(`Com ${idadeAnos} anos, você viveu aproximadamente ${mesesVividos} meses.`);

// 4. Média de notas
console.log("\n--- Ex 4 ---");
const notaA = 8;
const notaB = 7;
const notaC = 9;
const mediaEx4 = (notaA + notaB + notaC) / 3;
console.log("Média das três notas:", mediaEx4);

// 5. Maioridade
console.log("\n--- Ex 5 ---");
const idadePessoa = 18;
if (idadePessoa >= 18) {
    console.log("É maior de idade.");
} else {
    console.log("É menor de idade.");
}

// 6. Número positivo, negativo ou zero
console.log("\n--- Ex 6 ---");
const numeroEx6 = -5;
if (numeroEx6 > 0) {
    console.log("O número é positivo.");
} else if (numeroEx6 < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é igual a zero.");
}

// 7. Par ou ímpar
console.log("\n--- Ex 7 ---");
const numeroEx7 = 7;
if (numeroEx7 % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

// 8. Situação do aluno
console.log("\n--- Ex 8 ---");
const nota1Ex8 = 8;
const nota2Ex8 = 7;
const mediaEx8 = (nota1Ex8 + nota2Ex8) / 2;
if (mediaEx8 >= 7) {
    console.log("Situação: Aprovado");
} else if (mediaEx8 >= 5) {
    console.log("Situação: Recuperação");
} else {
    console.log("Situação: Reprovado");
}

// 9. Maior entre dois números
console.log("\n--- Ex 9 ---");
const numA = 15;
const numB = 20;
if (numA > numB) {
    console.log(`O maior número é ${numA}.`);
} else if (numB > numA) {
    console.log(`O maior número é ${numB}.`);
} else {
    console.log("Os dois números são iguais.");
}

// 10. Maior entre três números
console.log("\n--- Ex 10 ---");
const a = 12, b = 25, c = 18;
const maiorEx10 = Math.max(a, b, c);
console.log(`O maior número entre os três é: ${maiorEx10}`);

// 11. Cálculo de desconto
console.log("\n--- Ex 11 ---");
let precoProduto = 120;
let precoFinal = precoProduto;
if (precoProduto > 100) {
    precoFinal = precoProduto * 0.90;
}
console.log(`Preço original: R$ ${precoProduto} | Preço final: R$ ${precoFinal}`);

// 12. Controle de acesso
console.log("\n--- Ex 12 ---");
const idadeAcesso = 20;
const estaAutorizado = true;
if (idadeAcesso >= 18 && estaAutorizado) {
    console.log("Acesso permitido.");
} else {
    console.log("Acesso negado.");
}

// 13. Lista de nomes
console.log("\n--- Ex 13 ---");
const nomes = ["Grasielle", "Fernanda", "Bruno", "Leonardo", "Carlos"];
for (let cont = 0; cont < nomes.length; cont++) {
    console.log(nomes[cont]);
}

// 14. Lista de compras
console.log("\n--- Ex 14 ---");
const compras = ["Arroz", "Feijão", "Leite", "Café", "Pão"];
console.log(`Quantidade total de itens: ${compras.length}`);
console.log("Produtos cadastrados:");
for (let i = 0; i < compras.length; i++) {
    console.log(`- ${compras[i]}`);
}

// 15. Cadastro de pessoa
console.log("\n--- Ex 15 ---");
const pessoa = {
    nome: "Grasielle",
    idade: 30,
    cidade: "São Paulo",
    profissao: "Designer"
};
console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}, Profissão: ${pessoa.profissao}`);

// 16. Cadastro de produto
console.log("\n--- Ex 16 ---");
const produto = {
    nome: "Notebook",
    preco: 3500,
    categoria: "Eletrônicos",
    disponivel: true
};
console.log(`Produto: ${produto.nome} | Preço: R$${produto.preco} | Categoria: ${produto.categoria} | Disponível: ${produto.disponivel ? "Sim" : "Não"}`);

// 17. Cadastro de alunos
console.log("\n--- Ex 17 ---");
const alunosList = [
    { nome: "Lucas", idade: 16 },
    { nome: "Grasielle", idade: 17 },
    { nome: "Pedro", idade: 15 }
];
for (let i = 0; i < alunosList.length; i++) {
    console.log(`Aluno: ${alunosList[i].nome}, Idade: ${alunosList[i].idade}`);
}

// 18. Dobro de um número
console.log("\n--- Ex 18 ---");
function calcularDobro(numero) {
    return numero * 2;
}
console.log("Dobro de 4:", calcularDobro(4));
console.log("Dobro de 10:", calcularDobro(10));
console.log("Dobro de 25:", calcularDobro(25));

// 19. Calculadora de soma
console.log("\n--- Ex 19 ---");
function somar(x, y) {
    return x + y;
}
console.log("Soma 5 + 3:", somar(5, 3));
console.log("Soma 10 + 20:", somar(10, 20));
console.log("Soma 100 + 450:", somar(100, 450));

// 20. Calculadora de média
console.log("\n--- Ex 20 ---");
function calcularMedia2(nota1, nota2) {
    return (nota1 + nota2) / 2;
}
const mediaCalculada = calcularMedia2(8, 7);
console.log("Média calculada:", mediaCalculada);

// 21. Saudação personalizada
console.log("\n--- Ex 21 ---");
function saudar(nome) {
    return `Olá, ${nome}! Seja bem-vindo(a)!`;
}
console.log(saudar("Grasielle"));

// 22. Tabuada
console.log("\n--- Ex 22 ---");
const numTabuada = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${numTabuada} x ${i} = ${numTabuada * i}`);
}

// 23. Contagem crescente
console.log("\n--- Ex 23 ---");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// 24. Contagem regressiva
console.log("\n--- Ex 24 ---");
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
console.log("Fim!");

// 25. Números pares
console.log("\n--- Ex 25 ---");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 26. Soma de uma lista
console.log("\n--- Ex 26 ---");
const numerosEx26 = [10, 20, 30, 40, 50];
let somaTotal = 0;
for (let i = 0; i < numerosEx26.length; i++) {
    somaTotal += numerosEx26[i];
}
console.log("Soma da lista:", somaTotal);

// 27. Média de uma lista
console.log("\n--- Ex 27 ---");
const notasEx27 = [8, 7, 9, 6, 10];
let somaNotas = 0;
for (let i = 0; i < notasEx27.length; i++) {
    somaNotas += notasEx27[i];
}
console.log("Média da lista:", somaNotas / notasEx27.length);

// 28. Verificação de disponibilidade
console.log("\n--- Ex 28 ---");
const estoqueProduto = {
    nome: "Teclado",
    preco: 150,
    quantidade: 3
};
if (estoqueProduto.quantidade > 0) {
    console.log(`O produto ${estoqueProduto.nome} está disponível.`);
} else {
    console.log(`O produto ${estoqueProduto.nome} está indisponível.`);
}

// 29. Boletim completo
console.log("\n--- Ex 29 ---");
const nomeAlunoBoletim = "Grasielle";
const n1Boletim = 6.0;
const n2Boletim = 8.0;
const mediaBoletim = (n1Boletim + n2Boletim) / 2;
let situacao = "";
if (mediaBoletim >= 7) {
    situacao = "Aprovado";
} else if (mediaBoletim >= 5) {
    situacao = "Recuperação";
} else {
    situacao = "Reprovado";
}
console.log(`Aluno: ${nomeAlunoBoletim} | Média: ${mediaBoletim} | Situação: ${situacao}`);

// 30. Desafio final — Sistema de alunos
console.log("\n--- Ex 30 ---");
const alunosTurma = [
    { nome: "Grasielle", nota1: 8.0, nota2: 9.0 },
    { nome: "Fernanda", nota1: 5.5, nota2: 6.0 },
    { nome: "Bruno", nota1: 3.0, nota2: 4.5 }
];
for (let i = 0; i < alunosTurma.length; i++) {
    const aluno = alunosTurma[i];
    const mediaAluno = (aluno.nota1 + aluno.nota2) / 2;
    let status = "";
    if (mediaAluno >= 7) {
        status = "Aprovado";
    } else if (mediaAluno >= 5) {
        status = "Recuperação";
    } else {
        status = "Reprovado";
    }
    console.log(`Nome: ${aluno.nome}`);
    console.log(`  Primeira nota: ${aluno.nota1}`);
    console.log(`  Segunda nota: ${aluno.nota2}`);
    console.log(`  Média final: ${mediaAluno}`);
    console.log(`  Situação: ${status}`);
    console.log("------------------------");
}