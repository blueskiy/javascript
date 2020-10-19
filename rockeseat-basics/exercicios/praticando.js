//1
//Crie uma função que dado o objeto a seguir:
var endereco = {
  rua: 'Rua dos Pinheiros',
  numero: 1293,
  bairro: 'Centro',
  cidade: 'São Paulo',
  uf: 'SP',
};

//Retorne o seguinte conteúdo:
//O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros"
//com nº 1293.

function conteudo() {
  return `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}.`;
}

var enderecoUsuario = conteudo();
// console.log(enderecoUsuario);

//2
//Crie uma função que dado um intervalo (entre x e y) exiba todos número pares
function pares(x, y) {
  for (x; x <= y; x++) {
    if (x % 2 == 0) {
      console.log(x);
    }
  }
}

// pares(1, 100);

//3
//Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
//e retorna um booleano true/false caso exista ou não
function temHabilidade(skills) {
  return skills.indexOf('Javascript') > -1;
}

var skills = ['Javascript', 'ReactJs', 'React Native'];
console.log(temHabilidade(skills));
