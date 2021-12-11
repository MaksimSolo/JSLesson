//Объект со сведениями о произошедшем событии
// в кач ве параметра передается в обработчик

const sml = document.getElementById('small')
const mdm = document.getElementById('medium')
const big = document.getElementById('big')
const a = document.getElementById('a')

/*function onClickHandler(e) {
        console.dir(`${e.currentTarget.id}, ${e.target.id}`)
}*/

/*function onClickHandler(e) {
    console.dir(`${e.target.id}`)
}*/

/*function onClickHandler(e) {
    console.dir(`${e.currentTarget.id}`)
}*/

/*function onClickHandler(e) {
    // e.stopPropagation()
    console.dir(`${e.currentTarget.id}`)
}*/

function onClickHandler(e) {
    e.preventDefault()
    console.dir(`${e.currentTarget.tagName}`)
}

/*
sml.onclick =  onClickHandler
mdm.onclick =  onClickHandler
big.onclick =  onClickHandler
*/


/*sml.addEventListener('click', onClickHandler)
// sml.addEventListener('click', ()=>alert('yo'))
mdm.addEventListener('click', onClickHandler)
big.addEventListener('click', onClickHandler)*/

/*sml.addEventListener('click', onClickHandler, true)
mdm.addEventListener('click', onClickHandler, true)
big.addEventListener('click', onClickHandler, true)*/

a.addEventListener("click", onClickHandler)

sml.addEventListener('click', (e)=> {
    if(e.target.tagName === "BUTTON") {
        console.log(e.target.id)
    }
})
