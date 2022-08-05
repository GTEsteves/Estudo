var idade = 67
if (idade < 16) {
    console.log ('Menor de idade, não vota') //Console.log, pois estou usando o nodeJS.
} else { 
    if (idade >= 16 && idade < 18 || idade > 65) { //Operador de conjunção &&. Poderia remover idade >= 16. Operador de disjunção ||.
    console.log ('Voto opcional')
} else {
    console.log ('Maior de idade, vota')}
}