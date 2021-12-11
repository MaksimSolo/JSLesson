const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100
    }
]

/*const newArr = students.map(st => st.name);
console.log(newArr)*/

/*const newArr = students.map(st => `Hi, ${st.name}! How are you?`);
console.log(newArr)*/

/*
const newArr = students.map(st => `<li>Hi, ${st.name}! You have ${st.scores} scores!</li>`);
console.log(newArr)
*/

//map
//1.возвращает новый массив
//2. не меняет колво элементов
//3. принимает коллбэк-функцию в кач ве параметра
// 4. коллбэк выполняет обработку или преообразование каждого эл та исходного массива
//5. новый массив состоит из ретурн нашего коллбэка
//6. Исходный массив не изменяется

// const getName = s => s.name
function getName(s) {
    return s.name
}

const names = students.map(s => s.name)
console.log(names)
console.log(students)

const itMap = (array, callback) => {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        const result = callback(array[i])
        newArr[i] = result
    }
    return newArr
}
console.log(itMap(students, getName))

//filter/itFilter
//1.возвращает новый массив
//2. Возможно, меняет колво элементов
//3. принимает коллбэк-функцию в кач ве параметра
// 4. коллбэк выполняет обработку каждого эл та исходного массива
//5. коллбэк возвращает true или false, если true то элемент попадает в новый массив
//6. новый массив состоит из элементов исходного массива
//7. Исходный массив не изменяется


const itFilter = (array, callback) => {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArr.push(array[i])
        }
    }
    return newArr
}
const filteredArr = students.filter(s => s.age >= 20)
console.log(filteredArr)

console.log(itFilter(students, s => s.age >= 20))

//find
//1.возвращает 1 элемент исходного массива или ни одного
//2. принимает коллбэк-функцию в кач ве параметра
// 3. коллбэк выполняет обработку каждого эл та исходного массива
//4. коллбэк возвращает true или false,
//5. возвращает первый элемент, соответствующий условию
//6. Исходный массив не изменяется

const itFind = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i]
        }
    }
}
const getBob = s => s.name === 'Bob'
console.log(itFind(students,getBob))

console.log(students.find(s => s.name === 'Bob'))









