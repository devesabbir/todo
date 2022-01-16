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


//result

const check = document.querySelector('#check')
const rName = document.querySelector('#rname')
const rRoll = document.querySelector('#rroll')
const bMarks = document.querySelector('#bmarks')
const eMarks = document.querySelector('#emarks')
const mMarks = document.querySelector('#mmarks')
const sMarks = document.querySelector('#smarks')
const iMarks = document.querySelector('#imarks')
const rMarks = document.querySelector('#rmarks')
const bGrade = document.querySelector('#bgrade')
const eGrade = document.querySelector('#egrade')
const mGrade = document.querySelector('#mgrade')
const sGrade = document.querySelector('#sgrade')
const iGrade = document.querySelector('#igrade')
const rGrade = document.querySelector('#rgrade')
const bPoints = document.querySelector('#bpoints')
const ePoints = document.querySelector('#epoints')
const mPoints = document.querySelector('#mpoints')
const sPoints = document.querySelector('#spoints')
const iPoints = document.querySelector('#ipoints')
const rPoints = document.querySelector('#rpoints')
const svecha = document.querySelector('#svecha')
const totl = document.querySelector('#totl')
const totg = document.querySelector('#totg')
const finpo = document.querySelector('#finpo')
const fingr = document.querySelector('#fingr')
const totm = document.querySelector('#totm')




check.addEventListener('click', function(){
    const name =document.querySelector('#name')
    const roll =document.querySelector('#roll')
    const bangla =document.querySelector('#bangla')
    const english = document.querySelector('#english')
    const math = document.querySelector('#math')
    const science = document.querySelector('#science')
    const ict = document.querySelector('#ict')
    const reli =document.querySelector('#reli')
     

    const netMarks =((parseInt(bangla.value) + parseInt(english.value) + parseInt(math.value) + parseInt(science.value) + parseInt(ict.value)  + parseInt(reli.value)) / 6);
  

   if(name.value == '' || roll.value == '' || isNaN(parseInt(bangla.value)) || isNaN(parseInt(english.value))  || isNaN(parseInt(math.value)) || isNaN(parseInt(science.value))  || isNaN(parseInt(ict.value) ) || isNaN(parseInt(reli.value))){
        alert('all feild must be fill!');

    } else if(parseInt(bangla.value) < 33 || parseInt(english.value) < 33 || parseInt(math.value) < 33 || parseInt(science.value) < 33 || parseInt(ict.value) < 33 || parseInt(reli.value) < 33 ){
               
          //marksSubwise
          bMarks.innerHTML = bangla.value
          eMarks.innerHTML = english.value
          mMarks.innerHTML = math.value
          sMarks.innerHTML = science.value
          iMarks.innerHTML = ict.value
          rMarks.innerHTML = reli.value
          //gradeSubwise
          bGrade.innerHTML = gpa(bangla.value).grade
          eGrade.innerHTML = gpa(english.value).grade
          mGrade.innerHTML = gpa(math.value).grade
          sGrade.innerHTML = gpa(science.value).grade
          iGrade.innerHTML = gpa(ict.value).grade
          rGrade.innerHTML = gpa(reli.value).grade
          //pointsSubWise
          bPoints.innerHTML = gpa(bangla.value).points
          ePoints.innerHTML = gpa(english.value).points
          mPoints.innerHTML = gpa(math.value).points
          sPoints.innerHTML = gpa(science.value).points
          iPoints.innerHTML = gpa(ict.value).points
          rPoints.innerHTML = gpa(reli.value).points

          svecha.innerHTML = gpa(32).status
          totg.innerHTML = gpa(32).grade
          finpo.innerHTML = 0
          fingr.innerHTML = 'F'
          totl.innerHTML = 0
          totm.innerHTML = parseFloat(bangla.value) + parseFloat(english.value)  + parseFloat(math.value)  + parseFloat(science.value)  + parseFloat(ict.value) + parseFloat(reli.value)  
       

    }else{
          //marksSubwise
          bMarks.innerHTML = bangla.value
          eMarks.innerHTML = english.value
          mMarks.innerHTML = math.value
          sMarks.innerHTML = science.value
          iMarks.innerHTML = ict.value
          rMarks.innerHTML = reli.value
          //gradeSubwise
          bGrade.innerHTML = gpa(bangla.value).grade
          eGrade.innerHTML = gpa(english.value).grade
          mGrade.innerHTML = gpa(math.value).grade
          sGrade.innerHTML = gpa(science.value).grade
          iGrade.innerHTML = gpa(ict.value).grade
          rGrade.innerHTML = gpa(reli.value).grade
          //pointsSubWise
          bPoints.innerHTML = gpa(bangla.value).points
          ePoints.innerHTML = gpa(english.value).points
          mPoints.innerHTML = gpa(math.value).points
          sPoints.innerHTML = gpa(science.value).points
          iPoints.innerHTML = gpa(ict.value).points
          rPoints.innerHTML = gpa(reli.value).points


         //info
         rName.innerHTML = name.value
         rRoll.innerHTML = roll.value
         svecha.innerHTML = gpa(netMarks).status
        
         totl.innerHTML =  ((gpa(bangla.value).points + gpa(english.value).points + gpa(math.value).points + gpa(science.value).points + gpa(ict.value).points + gpa(reli.value).points) / 6 ).toFixed(2)

         totg.innerHTML  = gpa(netMarks).grade

         finpo.innerHTML = ((gpa(bangla.value).points + gpa(english.value).points + gpa(math.value).points + gpa(science.value).points + gpa(ict.value).points + gpa(reli.value).points) / 6 ).toFixed(2)

         fingr.innerHTML = gpa(netMarks).grade

         totm.innerHTML = parseFloat(bangla.value) + parseFloat(english.value)  + parseFloat(math.value)  + parseFloat(science.value)  + parseFloat(ict.value) + parseFloat(reli.value)   


    }

})