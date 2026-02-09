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
