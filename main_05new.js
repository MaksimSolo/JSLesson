let numbers = [3, -2, 15, 24, 3, 100, 22, 13, 1]

let names = ['алекс', 'Алекс', 'Bob', 'Alex', 'Mike', 'Nick', 'alex', 1000]
console.log(names.sort())
console.log(names.sort().reverse())


const compareFn = (a, b) => {
    // по возрастанию
    if (a > b) {
        return 1  //>0
    } else {
        return -1
    }
}

//console.log(numbers.sort(compareFn))
console.log(numbers.sort((a, b) => a - b));

const students = [
    {
        name: "bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
];

console.log(students.sort((a, b) => a.scores - b.scores))
//console.log(students.sort((a,b)=>a.name<b.name? -1:1))
console.log(students.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))


//пузырьковая
let array = [3, -2, 15, 24, 3, 100, 22, 13, 1]

/*const sorting = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++)
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
    }
    return array;
}
console.log(sorting(array))*/

const sorting = (array) => {
    let isSorted;
    for (let i = 0; i < array.length - 1; i++) {
        isSorted = true;
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                isSorted = false;
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
        if (isSorted) {
            return array;
        }
    }
}
console.log(sorting(array))