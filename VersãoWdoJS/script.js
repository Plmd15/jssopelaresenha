alert('Olá, seja bem-vindo, ao nosso exercício de JS!!!!');
// os leia

//os leia do nome
let nome = document.getElementById('nome');
let mostrar = document.getElementById('mostrar');
let resultadodonome = document.getElementById('resultadodonome');

//os leia do soma
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let somar = document.getElementById('somar');
let resultadodasoma = document.getElementById('resultadodasoma');

//leio da subtração
let num3 = document.getElementById('num3');
let num4 = document.getElementById('num4');
let subtrair = document.getElementById('subtrair');
let resultadodasubtração = document.getElementById('resultadodasubtração');


//para ler os botões
mostrar.addEventListener('click', apresentarnome);
somar.addEventListener('click', somatória);
subtrair.addEventListener('click', subtração);

//para fazer as funções
function apresentarnome() {

    if(nome.value === 'Melissa'){
    
        alert('Melissa? você por aqui? (easter egg 1/10 encontrado)')
        resultadodonome.textContent = 'Eu te amooooooooo muuuuuuuuuito mel, esteja sempre cmg plsss, mds eu te amo (Válido apenas para MBCQGDU (easter egg 1/3 encontrado)'
    
    }else if(nome.value === 'Meliça'){ 

        alert('Que nome interessante, me traz lembranças... (easter egg 2/10 encontrada)')
        resultadodonome.textContent = 'Erros acontecem...(easter egg 2/10)'

    }else if(nome.value === 'Anderson'){

        alert('Esse nome me é familiar (easter egg 3/10)')
        resultadodonome.textContent = 'Olá Chefe, o que você deseja calcular hoje? (easter egg 3/10)';

    }else if(nome.value === 'Foi feito com IA?'){

        alert('oque é ia? nunca ouvi falar disso (easter egg 4/10)')
        resultadodonome.textContent = 'Qm é IA? nunca ouvi falar disso (easter egg 4/10)'
    
    }else if(nome.value === 'Etec'){

        alert('Não fale o nome do monstro...(easter egg 5/10)');
        resultadodonome.textContent = 'Esquece isso';

    }else if(nome.value === 'Suicídio'){
  
        alert('Por que vc quer testar isso?(easter egg 8/10)');
        resultadodonome.textContent = 'Viva, a vida é boa :)(easter egg 8/10)';
    
    }else if(nome.value === 'Eu'){
        alert('Mds quanta aura (easter egg 9/10)');
        resultadodonome.textContent = 'Aura (easter egg 9/10)';
    
    }else if(nome.value === 'Jesus'){
  
        alert('Jesus te ama(easter egg 10/10)')
        resultadodonome.textContent = ('Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo o que nele crê não pereça, mas tenha a vida eterna.');
  
    }else{
  
        alert('Olá, '+ nome.value);
        resultadodonome.textContent = 'Olá '+ nome.value + ', o que você deseja calcular hoje?';
    }   
}

function somatória() {
    let soma = Number(num1.value) + Number(num2.value);

    if(soma === 67){
        alert('Seis e Sete?(easter egg 6/10)')
        resultadodasoma.textContent= 'SIIIIIX SEVEM wwwwwwooooooooowwwwww(easter egg 6/10)'
    }else{
        resultadodasoma.textContent = 'O resultado é: ' + soma;
        alert('Juntamos tudo e deu '+ soma);
    }
}

function subtração() {
    let subtração = Number(num3.value) - Number(num4.value);
    if(subtração === 67){
        alert('Seis e Sete?(easter egg 7/10)')
        resultadodasubtração.textContent= 'SIIIIIX SEVEM wwwwwwooooooooowwwwww(easter egg 7/10)'

    }else{
            alert('Calculamos e deu: '+ subtração);
            resultadodasubtração.textContent = 'O resultado é: ' + subtração;           
    }
}