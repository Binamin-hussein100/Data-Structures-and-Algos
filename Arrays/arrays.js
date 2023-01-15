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

console.log(firstEven)