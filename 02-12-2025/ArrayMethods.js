//indexOf()
let arr = [10, 20, 30, 20, 40];
console.log(arr.indexOf(20));


let users = ["Jeevan", "Kumar", "Ram"];
let newUser = "Kumar";

if (users.indexOf(newUser) !== -1) {
    console.log("User already exists!");
}


// let arr1 = [1,0,false];
// alert(arr1.indexOf(0));
// alert(arr1.indexOf(false));
// alert(arr1.indexOf(null));
// alert(arr1.includes(1));


//Concat()
//syntax  arr.concat(arg1, arg2....)
// let array = [1,2];
// alert(array.concat([3,4]));
// alert(array.concat([3,4], [5,6]));

let page1 = ["item1", "item2"];
let page2 = ["item3", "item4"];

let allItems = page1.concat(page2);
console.log(allItems); // ["item1", "item2", "item3", "item4"]



// //last indexOf()
// let fruits = ["Apple", "Banana", "Orange"];
// alert(fruits.indexOf("Apple"));
// alert(fruits.lastIndexOf("Orange"));


let transactions = ["credit", "debit", "credit", "refund"];
let lastCredit = transactions.lastIndexOf("credit"); 
console.log(lastCredit); // 2


//includes()
let validCoupons = ["NEW50", "SAVE10", "FESTIVE20"];

if (validCoupons.includes("FESTIVE20")) {
    console.log("Coupon applied!");
}