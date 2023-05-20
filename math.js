// console.group('Cuadrado');
// const ladoCuadrado = 5;
// const perimetroCuadrado = ladoCuadrado * 4;
// const areaCuadrada = ladoCuadrado * ladoCuadrado;
// console.log({
//     ladoCuadrado,
//     perimetroCuadrado,
//     areaCuadrada,
// });
// console.groupEnd('Cuadrado');

// console.group('Triangulo');
// const trianguloCP = 6;
// const trianguloCA = 6;
// const basetriangulo = 4;
// const trianguloAlt =5.5;

// const pTriangulo = trianguloCA + trianguloCP + basetriangulo;
// const aTriangulo = (basetriangulo * trianguloAlt) / 2;

// function calTrian(l1,l2,b,alt){
//     const pTriangulo = l1 + l2 + b;
//     return{
//         perimetro: l1 + l2 + b,
//         area:(b * alt) / 2,
//     }
// }

// function calAltTring( l1, b){
//     if( l1 == b){
//         console.warn('Hey este no es isosceles');
//     }else{
//         return Math.sqrt((l1 ** 2) - ((b ** 2)/ 4) )
//     }
// }
// console.log(calAltTring(6,4));


// console.log({
//     pTriangulo,
//     aTriangulo,
// });

// console.log(calTrian(6,6,4,5.5));


// function trinEscaleno(l1,l2,b){
//     const perimetro = l1 + l2 + b;
//     let s = perimetro / 2;
//     if(l1 == l2 && l2 == b && l1 == b){
//         console.log('Este no es un triangulo escaleno');
//     }else{
//         return{
//             area: Math.sqrt(s * ((s - l1) * (s - l2) * (s - b)))        
//         }
//     }
// }
// console.log( trinEscaleno(3,4,5));



// function trianguloEscaleno(lado1, lado2, lado3) {
//     let s = (lado1 + lado2 + lado3) / 2;
//     if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
//         return {
//             area: Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3))
//           }
//     } else {
//       return false;
//     }
//   }

//   console.log(trianguloEscaleno(16, 8, 10));
  
//   trianguloEscaleno(6, 6, 6);



// // s: perimetro/2,
// // area: s((s-l1)(s-l2)(s-l3)),

// console.groupEnd('Triangulo');


// console.group('Circulo')
// const radio  = 3;
// const diametroCirculo = radio *2
// const PI = 3.1416;

// const circunferencia = diametroCirculo * Math.PI.toFixed(2);
// const areaCirculo = (radio ** 2)  * Math.PI.toFixed(3);

// console.log({
//     circunferencia,
//     areaCirculo,
//     diametroCirculo,

// });

// function calCirculo(radio){
//     const diametroCir = radio *2;
//     return {
//         circunferencia: diametroCir * Math.PI.toFixed(3), 
//         areaCirculoCal: (radio * 2) * Math.PI.toFixed(3),
//         }
// }
// console.log(calCirculo(5));


// console.groupEnd('Circulo');

// let cupones = [
//     'SUPER', 
//     "MARVEL",
//     "NOP",
//     "GRANDE",
//     "BRANCORI"
// ]


const valorWanda = document.getElementById('newPricewsw');
const valorWw = document.getElementById('newPriceww');
const valorWs = document.getElementById('newPricews');
const valorWft = document.getElementById('newPriceft');


const btn = document.querySelector('#calcularwsw');
const btn2 = document.querySelector('#calcularww');
const btn3 = document.querySelector('#calcularws');
const btn4 = document.querySelector('#calcularft');


const resultsws = document.getElementById('resultsws');
const resultww = document.getElementById('resultww');
const resultws = document.getElementById('resultws');
const resultft = document.getElementById('resultft');


function wandaSW(descuento,precio){
    const precioFinal = precio - ((descuento / 100) * precio );
    return precioFinal
}
const resultado2 = wandaSW(30, 350);
valorWanda.innerHTML = "$" + resultado2.toFixed(2) +"mx";

const resultado1 = wandaSW(10, 450);
valorWw.innerHTML = "$" + resultado1.toFixed(2) +"mx";

const resultado3 = wandaSW(25, 800);
valorWs.innerHTML = "$" + resultado3.toFixed(2) +"mx";

const resultado4 = wandaSW(55, 650);
valorWft.innerHTML = "$" + resultado4.toFixed(2) +"mx";

btn.addEventListener('click',calPCD);
btn2.addEventListener('click',calPCD2);
btn3.addEventListener('click',calPCD3);
btn4.addEventListener('click',calPCD4);

function calPCD(){
    var varl = resultado2;
    const descuento_ = Number(disscountwsw.value);
    if(descuento_ === 0){
        resultsws.innerHTML = "";
    }else{
        const NewPrice = (varl * (100 - descuento_) / 100).toFixed(2);
        resultsws.innerHTML = '$'+ NewPrice ;
    }
}

function calPCD2(){
    var varl = resultado1;
    const descuento_ = Number(disscountww.value);
    if(descuento_ === 0){
        resultww.innerHTML = "";
    }else{
        const NewPrice = (varl * (100 - descuento_) / 100).toFixed(2);
        resultww.innerHTML = '$'+ NewPrice ;
    }
}

function calPCD3(){
    var varl = resultado3;
    const descuento_ = Number(disscountws.value);
    if(descuento_ === 0){
        resultws.innerHTML = "";
    }else{
        const NewPrice = (varl * (100 - descuento_) / 100).toFixed(2);
        resultws.innerHTML = '$'+ NewPrice ;
    }
}

function calPCD4(){
    var varl = resultado4;
    const descuento_ = Number(disscountft.value);
    if(descuento_ === 0){
        resultft.innerHTML = "";
    }else{
        const NewPrice = (varl * (100 - descuento_) / 100).toFixed(2);
        resultft.innerHTML = '$'+ NewPrice ;
    }
}

calPCD();
calPCD2();
calPCD3();
calPCD4();


