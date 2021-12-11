let array = [3, -2, 15, 24, 3, 10, 22, 13, 1]
let newArray =[]
function sort (array) {
    let arrLength  = array.length;
    for (let i = 0; i < arrLength && array.length>0; i++) {
        let minValue = array.reduce((acc, el) => {return acc < el ? acc : el})
        newArray.push(minValue)
        array = array.filter(i=>i !== minValue)
    }
    return (newArray);
}
sort (array)
console.log(newArray)