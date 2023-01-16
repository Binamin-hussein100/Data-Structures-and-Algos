# ARRAY
- An array is a contiguous (unbroken without interuptions) of equal sized elements indexed by contiguous integers.

## Types of Arrays
- One dimentional array
- Multidimentional array
    - 2D arrays
    - 3D arrays
   
### MultiDimentional Array
- An array that contains one or more arrays within it.  
- They are useful for storing and manipulating data that can be modelled as a grid. i.e matrix, table and cube.

### Types for common operations
- To read and write elements of an array is order-1 (constant time)
- Adding and removing elements at the end of array is order-1 (constant time)
- Adding and removing elements at the beginning of array is order(n) (linear time)
- To add and remove elements in the middle of array is O(n) (linear time)

### Common Operations

- Traversal
- Insertion
- Deletion
- Searching
- Sorting

### Ops
- indexOf(n) => returns the index of n
- push() => Add element to the end of array
- pop() => Remove element from the end of array
- unshift() => Add element to the beginning of array
- shift() => Subtract element from the beginning of array
- find() => returns the first element that satisfies the callback fn that you give it.
- slice() => returns a new array that is a portion of the old array. It takes a start and end index and returns everything in between.
- splice() => adds or removes elements from an array. Takes in a start index, delete count(elements you want to remove) and whatever elements you want to add.