// var a = ola;
// var b = 3;

// var soma = a+b;
// var sub = a-b;
// var mult = a*b;
// var div = a/b;

// if (a%2 == 0){
//     alert("par");
// }
// else if (c%2 == 0){
//     alert("numero impar")
// }
// else{
//      alert("erro valor invalido")
// }
// function soma(a, b){
//     return a+b
// }
 
//console.log(soma(2, 2));
 
// função anônima
 
// (function (x, y){
//     console.log(x+y);
// })(5, 5);
 
 
// // function expression
 
// const soma = function(x, y){
//     return x+y;
// }
 
// let resultado = soma(2, 5);
 
// console.log("function expression simples:", resultado)
 
// // arrow function
// const somav2 = (x, y) => {
//     return x+y;
// }
 
// console.log("arrow function:", somav2(2, 5));
 
// const somav3 = (x, y) => x+y;
// console.log("arrow function 1 linha:", somav3(2, 5));
 
// // função invocada
// (
//     ()=>{ 
//         console.log("olá mundo")
//     }
// )
// ();
 
// (()=>{console.log('aaaaaa')})();
 
// // spread
// const somav4 = (x = 0, y = 0, z = 0) => x+y+z;
// console.log(somav4(2, 2, 3))
 
 
// const somav5 = (...numeros) => {
//     //console.log(numeros)
//     let aux = 0;
//     for(i of numeros){
//         aux += i;
//     }
//     return aux;
// }
 
// console.log("SPREAD:", somav5(2, 2, 10, 30, 55))
x = n => { return n+1 }
y = n => { return x(n)*x(n-1) }
console.log(y(10))