//write a loop that outputs numbers from 1 to 10
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)


for(let i= 1; i <= 10; i++){
    console.log(i)
}
1++
2++
3
4
5
6
7
8
9
10 ++ 

//write a for loop that outputs numbers from 200 to 100

for(let i = 200; i >=100; i--){
    console.log(i)
}
200--
199
198
100


let fruits = ['apple','mango','banana','peach']

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])

for(let i=0; i < fruits.length ; i++){
    console.log(fruits[i])
}


let i = 1

while ( i <= 10 ){

    console.log(i)
    i++
}



for(let i = 1; i <= 10 ; i++){
    for(let j=2; j<= 5; j++){
        for(let k = 3; k<= 5;k++){
            console.log(i,j,k)
        }
    }
}

1,2,3
1,2,4
1,2,5
1,3,3
1,3,4
1,3,5