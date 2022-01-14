//smartWatchStart
const nDat = document.querySelector('#nDat')
const nMon = document.querySelector('#nMon')
const nYear = document.querySelector('#nYear')
const hour = document.querySelector('#hour')
const am_pm = document.querySelector('#am_pm')
const minute = document.querySelector('#minute')
const sec = document.querySelector('#sec')
const day = document.querySelector('#day')


setInterval(() => {
    let date = new Date();
    let fiHour = `${date.getHours() === 0 ? 12 : date.getHours()}`;
    let amPm = `${date.getHours() > 12 ? 'PM' : 'AM'}`
    let finalHour = `${fiHour > 12 ?  fiHour - 12 : fiHour}`
    nDat.innerHTML = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`;
    nMon.innerHTML = `${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}`;
    nYear.innerHTML = `${date.getFullYear()}`;
    hour.innerHTML = `${finalHour < 10 ? '0' + finalHour : finalHour}`;
    am_pm.innerHTML = `${amPm}`;
    minute.innerHTML = `${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
    sec.innerHTML = `${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() }`;
    day.innerHTML = `${dayCal(date.getDay())}`

}, 1000);
//smartWatchEnd

// counterStart
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')
const output = document.querySelector('#output')
const loader = document.querySelector('#loader')

let count = 0;
let tCount;
let cinput;

start.addEventListener('click', function(){
    cinput = document.querySelector('#input')
    count = cinput.value 

    if(cinput.value == '' || cinput.value == undefined || cinput.value == null ){
        cinput.style.border = '1px solid red'
    }else if((/^[0-9]*$/).test(cinput.value) != true){
        cinput.nextElementSibling.innerHTML = 'Only number' 
    }else{
        cinput.nextElementSibling.innerHTML = '' 
        loader.innerHTML = ``
        tCount = setInterval(function(){
            cinput.style.border = 'none'
            output.innerHTML = count 
            loader.style.backgroundColor = `${colorSet(widthCal(cinput.value,count))}`
            loader.style.width = `${widthCal(cinput.value,count)}%`   
            loader.innerHTML = `${widthCal(cinput.value,count)}%`

            if( count <= 0 ){
                clearInterval(tCount)
                loader.innerHTML = `<span>Finished!</span>`
                loader.style.backgroundColor = 'transparent'
            }

            count--
         },1000)
    }
   
})

stop.addEventListener('click', function(){
    clearInterval(tCount)
    cinput.value = count
})

reset.addEventListener('click', function(){
    clearInterval(tCount)
    count = 0;
    output.innerHTML = count 
    loader.style.width = 0
    loader.style.backgroundColor = 'transparent'
    loader.innerHTML = ''
})
// counterEnd

//toappStart
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')


todoButton.addEventListener('click',addTodo)
todoList.addEventListener('click',dltCheck)