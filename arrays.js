let arr = [ 1, 2, 3.142, "JavaScript", "Python", false] 
console.log(arr)

//indexing
console.log(arr[2])
console.log(arr.at(4))
console.log(arr.at(-1))

//updating array values
arr[5] = true
console.log(arr) //(6) [1, 2, 3.142, 'JavaScript', 'Python', true]

//length
console.log(arr.length) //6

//slice
console.log(arr.slice(1,4)) //(3) [2, 3.142, 'JavaScript']

//adding items

arr.push(100,200)

arr.unshift("Jack","Jill")
console.log(arr) //(10) ['Jack', 'Jill', 1, 2, 3.142, 'JavaScript', 'Python', true, 100, 200]

//removing
arr.pop()
console.log(arr) //(9) ['Jack', 'Jill', 1, 2, 3.142, 'JavaScript', 'Python', true, 100]
arr.shift()
console.log(arr)//(8) ['Jill', 1, 2, 3.142, 'JavaScript', 'Python', true, 100]

let numbers = [1,2,3,4,5,6,7]

//splice to add  without deleting
numbers.splice(3,0,"JS","C++")
console.log(numbers) //(9) [1, 2, 3, 'JS', 'C++', 4, 5, 6, 7]


//splice to remove without replacement
numbers.splice(7,2)
console.log(numbers) //(7) [1, 2, 3, 'JS', 'C++', 4, 5]

//splice to remove with replacement
numbers.splice(5,2,"four","five")
console.log(numbers) // [1, 2, 3, 'JS', 'C++', 'four', 'five']