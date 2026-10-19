// Array in Javascript:
// To store multiple values in a single variable

const mobiles = ["Samsung", "Vivo", "Tecno", "Iphone", "Infinix"];
console.log(mobiles);

// Also console single value by indexes
const food = ["Biryani", "Burger", "Pasta", "Fries"];
console.log(food[0]);
console.log(food[2]);
console.log(food[3]);
console.log("Before Update", food);

// Updating array
food[1] = "Pizza";
console.log("After Update", food);

// Find array length using .length property
console.log(food.length);

// Array methods

// push method: "Add value/values in end"
const fruits = ["Mango", "Orange"];
fruits.push("Apple", "Banana");
console.log("Added two values at end By push method", fruits);

// pop method: "Remove value from end"
fruits.pop();
console.log("Removed last value by pop method", fruits);

// unshift method: "Add value/values in start"
fruits.unshift("Grapes", "watermelon");
console.log("Added two values at start by unshift method", fruits);

// shift method: "Remove value from start"
fruits.shift();
console.log("Remove start value by shift method", fruits);

// slice method: "To access specific part of array, it can't change the original array"
console.log("access two values by slice method", fruits.slice(1, 3));

// splice method: "To add, remove and replace values in array"
fruits.splice(1, 1, "Guava", "Peach", "Apple");
console.log("Delete 1 value and add three values by splice method", fruits);

// concat method: "Merge two arrays"
console.log("Merge two arrays by concat method", food.concat(fruits));

// includes method: "To check value exist or not. It gives boolean value in outputs"
console.log("check exist value by Includes method:", fruits.includes("Banana"));

// indexOf method: "Returns the index of the first occurrence"
console.log("indexOf method", fruits.indexOf("Apple"));

// lastIndexOf method: "Returns the index of the last occurrence"
console.log("lastIndexOf method", fruits.lastIndexOf("Apple"));

// at method: "Access an element by position"
console.log("Access last element by at method:", fruits.at(-1));

// reverse method: "reverse the array values"
console.log("Reverse the array values by reverse method", fruits.reverse());

// sort method: "Sorts array elements; strings can be sorted alphabetically"
console.log("Arrange values by sort method", fruits.sort());

// Array.isArray method: "To check value is an array or not"
console.log("value is array or not by Array.isArray", Array.isArray(fruits));

// fill method: "fill an array with a value"
fruits.fill("Banana");
console.log("Fill an array with banana using fill method", fruits);

// flat method: "used to flatten a nested array"
const cars = ["BMW", "Crown", ["Toyota", "Tesla"], "Nissan", "Kia", "Mercedes"];
console.log("Flatten nested array by flat method", cars.flat());
