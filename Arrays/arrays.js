const nums = [1,2,4,7]

// - push() => Add element to the end of array
nums.push(8)
console.log(nums) // [ 1, 2, 4, 7, 8 ]

// - pop() => Remove element from the end of array
nums.pop() // returns the value that was removed // 8
console.log(nums) // [ 1, 2, 4, 7 ]

// - shift() => Subtract element from the beginning of array
nums.shift()
console.log(nums) // [ 2, 4, 7 ]

// unshift() => Add element to the beginning of array
nums.unshift(100)
console.log(nums) // [ 100, 2, 4, 7 ]

// find() => returns the first element that satisfies the callback fn that you give it.
const firstEven = nums.find((n)=>{
    if(n % 2 == 0){
        return true
    }
})

console.log(firstEven) // 100

// slice() => returns a new array that is a portion of the old array. It takes a start and end index and returns everything in between.
const sliceWay = nums.slice(1)
console.log(sliceWay)

// - splice() => adds or removes elements from an array. Takes in a start index, delete count(elements you want to remove) and whatever elements you want to add.

const fruit = ['Banana',"Orange","Green","Mango"]
fruit.splice(3,0,"apple")
fruit.splice(2,1,"peach")
console.log(fruit)

// indexOf(n) => returns the index of n
console.log(fruit.indexOf("peach")) // returns -1 if the value passed does not exist



