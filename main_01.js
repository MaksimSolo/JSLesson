/*//Примитивы: string, number, boolean, null, undefined, NaN, Infinity, Symbol, BigInt
/!*
const test = Infinity
console.log((typeof test)) //number*!/

//Объекты: объектыб массивы и функции

/!*const test = {}
console.log((typeof test)) //object*!/

/!*const test = () => {}
console.log((typeof test)) //function*!/

/!*const test = []
/!*console.log((typeof test)) //object*!/
console.log((Array.isArray(test))) //true*!/

/!*
const test = {
    name: "Bob"
}
console.log(test.name) //Bob*!/

const user = {   // номер ячейки
    name: 'Bob', //примитив
    friends: ['Alex', 'Donald'], // ссылка на массив
    technologies: []
}

const user_2 = user
user_2.name = 'Anne'

console.log(user_2)
console.log(user)

const copyUser = {...user}  //получили ссылки на тот же массив
copyUser.name = 'Bob'
console.log(copyUser)
console.log(user)
console.log(copyUser === user)
console.log(copyUser.friends === user.friends)
copyUser.friends.push("Helge")
console.log(copyUser)
console.log(user)

//делаем глубокую копию
const deepCopyUser = {...user, friends: [...user.friends], technologies: []}
deepCopyUser.friends.push('Olga')
console.log(deepCopyUser)
console.log(user)
user.age = undefined
console.log(user)

//библиотека lo_dash подключается дополниельно и  используется для копирования объектов любого уровня сложности
//_.cloneDeep(objects)

const deepDeepCopy = {...deepCopyUser, friends: deepCopyUser.friends.filter(f => f !== 'Olga')}
console.log(deepDeepCopy)
console.log(deepDeepCopy === deepCopyUser)  //false
delete user.friends
console.log(user)
console.log(copyUser)*/

/*const students = [
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
]*/

/*const newArr = students.map(st => st.name);
console.log(newArr)*/

/*const newArr = students.map(st => `Hi, ${st.name}! How are you?`);
console.log(newArr)*/

/*
const newArr = students.map(st => `<li>Hi, ${st.name}! You have ${st.scores} scores!</li>`);
console.log(newArr)
*/

const students = [{
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
    }]

//map
//1.возвращает новый массив
//2. не меняет колво элементов
//3. принимает коллбэк-функцию в кач ве параметра
// 4. коллбэк выполняет обработку или преообразование каждого эл та исходного массива
//5. новый массив состоит из ретурн нашего коллбэка
//6. Исходный массив не изменяется

