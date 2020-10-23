function retornaSexo(sexo) {
  //M, F
  //Masculino, Feminino

  // if (sexo === 'M') {
  //   return 'masculino';
  // } else if (sexo === 'F') {
  //   return 'feminino';
  // } else {
  //   return 'outro';
  // }

  switch (sexo) {
    case 'M':
      return 'masculino';
    case 'F':
      return 'feminino';
    default:
      return 'outro';
  }
}

var resultado = retornaSexo('F');
console.log(resultado);
