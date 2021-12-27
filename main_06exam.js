const students = [
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
        scores: 90,
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
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}
// console.log(user)
//1. Создайте поверхностную копию объекта user
let copyUser = {...user};
// console.log(copyUser)


//Проверка:
// console.log(user===copyUser)- что должно быть в консоли?
// console.log(user.friends===copyUser.friends)- что должно быть в консоли?
// console.log(user===copyUser) // false
// console.log(user.friends===copyUser.friends) // true


//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]};
//
//Проверка:
// console.log(user===deepCopyUser) - что должно быть в консоли?
// console.log(user.friends===deepCopyUser.friends) - что должно быть в консоли?
// console.log(user===deepCopyUser) //false
// console.log(user.friends===deepCopyUser.friends) //false
//
//3. Поверхностная копия массива students
let copyStudents = [...students];
// console.log(students)
// console.log(copyStudents)
//Проверка:
// console.log(код проверки написать самостоятельно ) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(students.length===copyStudents.length) //true
// console.log(students===copyStudents) //false
// console.log(students[4]===copyStudents[4]) //true
//
// students.shift()
// console.log(students)
// console.log(copyStudents)
//
//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(st => ({...st}));

//Проверка:
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(students)
// console.log(deepCopyStudents)
// console.log(students.length === deepCopyStudents.length) //true
// console.log(students[4] === deepCopyStudents[4]) //false


// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName = deepCopyStudents.sort((a, b) => a.name <= b.name ? -1 : 1);

// console.log(students)
// console.log(sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortByScores = deepCopyStudents.sort((a, b) => a.scores - b.scores);
// console.log(sortByScores);


//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = students.filter(st => st.scores >= 100);
// console.log(bestStudents)
// console.log(students)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents
    .sort((a, b) => a.scores - b.scores)
    .reverse()
    .splice(0, 3)

// console.log(deepCopyStudents)
// console.log(topStudents)

// 6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-оператор)
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
// console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = students.filter(st => !st.isMarried);
// console.log(notMarriedStudents)
// console.log(students)

//8. Сформируйте массив имён студентов (map)
let studentsNames = students.map(st => st.name);
// console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let nameWithSpace = [...studentsNames].join(' ');
// console.log(nameWithSpace)
let namesWithComma = [...studentsNames].join(',');
// console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(st => ({...st, isStudent: true}));
// console.log(trueStudents)
// console.log(students)

//10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(st => st.name === 'Nick' ? {...st, isMarried: true} : st);
// console.log(studentsWithMarriedNick)
// console.log(students)

//11. Найдите студента по имени Ann (find)
let ann = students.find(st => st.name === 'Ann');
// console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - не испльзуя методы массивов и Math.max()

let bestStudent = students.reduce((acc, el) => acc.scores > el.scores ? acc : el);
// console.log(bestStudent)
//console.log(students)

const getBestStudent = (arr) => {
    const copyArr = [...arr]
    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (copyArr[i].scores < copyArr[i + 1].scores) {
                [copyArr[i], copyArr[i + 1]] = [copyArr[i + 1], copyArr[i]]

            }
            //console.log(copyArr)
        }
        //console.log(copyArr)
    }
    return copyArr[0]
}
let bestStudent2 = getBestStudent(students);
// console.log(students)
// console.log(bestStudent2)

//13. Найдите сумму баллов всех студентов (reduce)

// И поднимаем руку!!!!

let scoresSum = students.reduce((acc, el) => acc + el.scores, 0);
// console.log(scoresSum)


// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => students.map(st => ({...st, friends: studentsNames.filter(name => name !== st.name)}));

console.log(students)
console.log(addFriends(students));









