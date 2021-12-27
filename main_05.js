let array = [3, -2, 15, 24, 3, 10, 22, 13, 1]

//пузырьковая сортировка (bubble sort)
for (let j = 0; j < array.length - 1; j++) {
    for (let i = 0; i < array.length - 1 - j; i++) {
        if (array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]]
        }
    }
}
console.log(array)

//sort

const names = ['Bob', 'Alex', 'Nick', 'Donald', 'Joe', '999', ':alex', 'Юрий', 'юрий']
console.log(names.sort())

let numbers = [3, -2, 15, 24, 3, 10, 22, 13, 1]
console.log(numbers.sort())  //[-2, 1, 10, 13, 15, 22, 24, 3, 3]
//это потому что сорт преводит числа в строки и сравнивает по символам юникода,
//а значит имя начинающееся на 1 будет раньше чем имя начинающееся на 3

//вносим в сорт аргумент - compare function

/*const compareFunction= (a,b) =>{
    if(a>b){
        return 999
    }else {
        return -2
    }
}*/
//элегантно:

const compareFunction = (a, b) => a - b  //b-a - по убыванию

console.log(numbers.sort(compareFunction))
console.log(numbers.sort(compareFunction).reverse())

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "alick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

console.log(students.sort((a, b) => a.scores - b.scores))
console.log(students
    .sort((a, b) => a.scores - b.scores)
    .reverse())

//студентов по алфавиту
console.log(students.sort((a,b)=>a.name.toLowerCase() <= b.name.toLowerCase() ? -1:1))
