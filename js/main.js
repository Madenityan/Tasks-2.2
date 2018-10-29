/*First task
Дан масив чисел (положительных, отрицательных и в перемешку)
Найти max, min, sum
Нельзя использовать методы массива, а только циклы for, while*
Примеры массивов:
   1.[3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]
   2.[-1,-8,-2]
   3.[1,7,3]
   4.[1,undefined,3,5,-3]
   5. [1,NaN,3,5,-3]*/

/*----------------------------------- 1 -------------------------------------*/
let arr1 = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
let sumA = 0;

for (let i = 0; i < arr1.length; i++){
    sumA = sumA + arr1[i];
    Math.max.apply(null, arr1);
    Math.min.apply(null, arr1);
}
console.log(sumA);

/*----------------------------------- 2 -------------------------------------*/
let arr2 = [-1,-8,-2];
let sumB = 0;

for (let i = 0; i < arr2.length; i++){
    sumB = sumB + arr2[i];
    Math.max.apply(null, arr2);
    Math.min.apply(null, arr2);
}
console.log(sumB);

/*----------------------------------- 3 -------------------------------------*/
let arr3 =  [1,7,3];
let sumC = 0;

for (let i = 0; i < arr3.length; i++){
    sumC = sumC + arr3[i];
    Math.max.apply(null, arr3);
    Math.min.apply(null, arr3);
}
console.log(sumC);


/*Second task
Find in array: sum, min and max, replace min and max.Create function which will return all versions in object*/

let arr = [10,20,30,60,70,100,150];

function getSum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return {
        sum: sum,
        mathMax: Math.max.apply(null, array),
        mathMin: Math.min.apply(null, array)
    }
}
console.log(getSum(arr));

/*Third task
Create function which will return function with callback*/

let show = function(text) {
    return console.log(text);
};
show('yoyo');

function run(a, b, callback){
    let result = a+ b;
    console.log(result);
    return callback(result);
}
run(10, 15, show);

/*
Fourths task
Функция, которая будет принимать массив и ретурнить обьект, свойства будут индексы, а ключи - значения под этим индексом в массиве*/

function getObj(arr) {
    let myObject = {};

    for (let i = 0; i < arr.length; i++){
        myObject[i] = arr[i];
    }
    return myObject;
}
console.log(getObj([10,20,30,40]));

