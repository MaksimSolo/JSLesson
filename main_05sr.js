let array = [3, -2, 15, 24, 3, 10, 22, 13, 1]
let newArray = []

function sort(array) {
    let arrLength = array.length;
    for (let i = 0; i < arrLength && array.length > 0; i++) {
        let minValue = array.reduce((acc, el) => {
            return acc < el ? acc : el
        })
        newArray.push(minValue)
        array = array.filter(e => e !== minValue)
        // array.indexOf(minValue)!==-1 ? array.splice(array.indexOf(minValue), 1) : array
    }
    return (newArray);
}

sort(array)
console.log(newArray)