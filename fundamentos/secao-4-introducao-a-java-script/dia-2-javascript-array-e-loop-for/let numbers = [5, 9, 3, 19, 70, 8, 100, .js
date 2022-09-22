let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index+=1){
    console.log(numbers[index]);}
let sum=0;
for (let index=0; index<numbers.length; index+=1){
    sum = sum + numbers[index];
}    
console.log(sum);

let media = sum/numbers.length;
console.log(media);

if (media>20) { console.log("Valor maior que 20")}
else {console.log("Valor menor ou igual a 20")}

let maior=0;

for (let index =0; index<numbers.length; index+=1){
    if (maior<numbers[index]){
        maior = numbers[index];
    }
}
console.log(maior);

contador=0;

for (let index =0; index<numbers.length; index+=1){
    if (numbers[index]%2 != 0){
        contador = contador + 1;
    }
}

if (contador >0 ){
    console.log(contador);
}
else { console.log("Não existem números ímpares")}

let menor=Infinity;

for (let index =0; index<numbers.length; index+=1){
    if (menor>numbers[index]){
        menor= numbers[index];
    }
}

console.log(menor);

let array=[];

for (let index=0; index<25; index+=1){
    array[index] = index+1;
    console.log(array[index]);
}

for(let index=0; index<array.length; index+=1){
    array[index]= array[index]/2;
    console.log(array[index]);
}