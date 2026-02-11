const fruits = ["apple", "mango", "kiwi"];
console.log(fruits[0]);
console.log(fruits.length);
fruits[1] = "banana";
console.log(fruits);
console.log(typeof fruits)



let nums = [1, 2, 3, 4, 5];
console.log(nums.toString());
console.log(nums.join("-"));
console.log(nums.pop())
console.log(nums.push(6))
console.log(nums.shift())
console.log(nums.unshift(0))
delete nums[2];
console.log(nums);

//loops in arrays

let marks = [90, 80, 70, 60, 50];

for (let i=0; i<marks.length; i++){
    console.log(marks[i]);
}


marks.forEach((element)=>{
    console.log(element*element);
}
)


//array.from  --- used in dom to convert html collection into array

let name = 'Mehak';
let arr = Array.from(name);
console.log(arr);

for ( let i in arr){
    console.log(arr[i]);
}

for (let a in arr){
    console.log(a);
}

//higher order functions in arrays

let arr = [90, 80, 70, 60, 50];

let a = arr.map((value)=>{
    return value+2;

})
console.log(a);


let arr2 = [1, 2, 3, 4, 5];
let b = arr2.filter((value)=>{
    return value>3;
})

console.log(b);

let arr3 = [2,5,7,9];

let c = arr3.reduce((a,a2)=>{
    return a+a2;
})
console.log(c);

//practice

let arr = [1, 2, 3, 4, 5];
let a = prompt("Enter a num:");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);

let age = [10,22,25,30,40,45,50,60];
let b = age.filter((me)=>{
    return me%10==0;
})
console.log(b);

let nums = [2,3,4,5,6,7];
let square = nums.map((x)=>{
    return x*x;
})
console.log(square);

let factorial = [1, 2, 3, 4, 5];

let fact = factorial.reduce((x,y)=>{
    return x*y;
})
console.log(fact);

