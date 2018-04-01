//Brincando com vetores 3.0 
//O legal é que essa parte tem como se fazer com qualquer linguagem...

var numeros = [[],[],[],[],[],[],[],[],[],[]];
var qtdDeVetores =  numeros.length;
var qtdDeElementosPorVetor = 10;
var qtdDeElementosTotal = qtdDeElementosPorVetor*qtdDeVetores;

for(var linha = 0; linha < qtdDeVetores; linha++){
	for(var coluna = 0; coluna < qtdDeElementosTotal; coluna++){
		if(numeros[linha].length === qtdDeElementosPorVetor){
			break;
		}
		numeros[linha][coluna] = Math.floor(Math.random() * 500);
	}
}

//Agora essa só linguagens funcionais...

var parOuImpar = [];
numeros.forEach(function(elem){
	parOuImpar.push(elem.map(function(num){
		if(num % 2 === 0){
			return 'even';
		}
		return 'odd';
	}));
});
console.log(parOuImpar);

//E essa também (FizzBuzz)

var fizzBuzz = [];

numeros.forEach(function(elem){
	fizzBuzz.push(elem.map(function(num){
		if(num % 3 === 0 && num % 5 === 0){
			return "FizzBuzz";
		}else if(num % 3 === 0){
			return "Fizz";
		}else if(num % 5 === 0){
			return "Buzz";
		}else{
			return num;
		}

	}));
});

console.log(fizzBuzz);