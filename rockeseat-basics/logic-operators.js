//AND, OR, NOT
//AND => &&
//OR => ||
//NOT => !

var sexo = 'M',
  idade = 26;

if ((sexo === 'M' && idade >= 18) || idade != 44) {
  console.log('ok');
}

var masculino = sexo === 'M';

console.log(masculino);
