let person = {
    "name" : "Naomi Muriithi",
    "age" : "23",
    "address" : "124 Monrovia St",
    is_student : true,
    "my skills" : ["cloud","SRE"]
    
}

console.log(person)

//dot notation
console.log(person.name)

//bracket_notation
console.log(person["my skills"])
console.log(person['is_student'])

//methods
console.log(Object.keys(person)) //(5) ['name','age','address','is_student','my skills']

console.log(Object.values(person)) //(5) ['Naomi Muriithi',23,'124 Monrovia St',true,Array(2)]

console.log(Object.entries(person)) //Array(2), Array(2),Array(2),Array(2),Array(2)