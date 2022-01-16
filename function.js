/**
 * 
 * @param {*} day 
 * @returns 
 */
function dayCal(day){
     if(day == 0){
         return `<span>Sunday</span>`
     }else if(day == 1){
        return `<span>Monday</span>`
     }else if(day == 2){
        return `<span>Tuesday</span>`
     }else if(day == 3){
        return `<span>Wednesday</span>`
     }else if(day == 4){
        return `<span>Thursday</span>`
     }else if(day == 5){
        return `<span>Friday</span>`
     }else if(day == 6){
        return `<span>Saturday</span>`
     }
}


/**
 * 
 * @param {*} input 
 * @param {*} output 
 * @returns 
 */
function widthCal(input,output){
    return `${((output * 100) / input).toFixed(2)}`
}


/**
 * 
 * @param {*} width 
 * @returns 
 */
function colorSet(width){
   let colr;
    if(width <= 100 && width >= 60){
      colr = 'green'
    }else if(width <= 59 && width >= 20){
      colr = 'orange'
    }else if(width < 20){
      colr = 'red'
    }

    return colr;
}

/**
 * 
 * @param {*} event 
 */

function addTodo(event){
   event.preventDefault();
   if(todoInput.value === ''){
       todoInput.value = 'untitled'
   }
   //createDiv
   const todoDiv = document.createElement('div')
   todoDiv.classList.add('todo')
   //createLI
   const newTodo = document.createElement('li')
   newTodo.classList.add('todo-item')
   newTodo.innerText = todoInput.value
   todoDiv.appendChild(newTodo)
   //createCompleteButton
   const comButton = document.createElement('button')
   comButton.innerHTML = `<i class="fas fa-check"></i>`
   comButton.classList.add('com-btn')
   //trashButton
   const deleteButton =  document.createElement('button')
   deleteButton.innerHTML = `<i class="fas fa-trash"></i>`
   deleteButton.classList.add('dlt-btn')

   todoDiv.appendChild(comButton)
   todoDiv.appendChild(deleteButton)
   todoList.appendChild(todoDiv)

   todoInput.value = ''; 

}

/**
 * 
 * @param {*} event 
 */

function dltCheck(event){
  const item = event.target

  if(item.classList[0] === 'dlt-btn'){
      const rmv = item.parentElement;
      rmv.classList.add('fall')
      rmv.addEventListener('transitionend', function(){
         rmv.remove(); 
      })
     
  }

  if(item.classList[0] === 'com-btn'){
      const chk = item.parentElement;
      chk.classList.toggle('complete');
  }
}


//result

/**
 * 
 * @param {*} marks 
 * @returns 
 */
 function gpa(marks){


   if(marks === '' || marks < 0 || marks > 100){
      return  {
         grade : 'invalid',
         points : 'invalid',
        
      }  
   }else if(marks >= 0 && marks <= 32){
       return  {
           grade : 'F',
           points : 0 ,
           class : 'danger',
           status : 'Sorry You have Failed'
     }
   }else if(marks >= 33 && marks <= 39){
       return  {
           grade : 'D',
           points : 1.00,
           class : 'warning',
           status : 'Congratulation! You have passed.'
     }
   }else if(marks >= 40 && marks <= 49){
       return  {
           grade : 'C',
           points : 2.00,
           class : 'info',
           status : 'Congratulation! You have passed.'
     }
   }else if(marks >= 50 && marks <= 59){
       return  {
           grade : 'B',
           points : 3.00,
           class : 'info',
           status : 'Congratulation! You have passed.'
     }
   }else if(marks >= 60 && marks <= 69){
       return  {
           grade : 'A-',
           points : 3.50,
           class : 'primary,',
           status : 'Congratulation! You have passed.'
     }
   }else if(marks >= 70 && marks <= 79){
       return  {
           grade : 'A',
           points : 4.00,
           class : 'success',
           status : 'Congratulation! You have passed.'
     }
   }else if(marks >= 80 && marks <= 100){
       return  {
           grade : 'A+',
           points : 5.00,
           class : 'success',
           status : 'Congratulation! You have passed.'
     }
   }
}


function gpaStatus(name,roll,marks){
   return `
          <p class="text-${gpa(marks).class}" >Hi ${name}, Your Roll ${roll} & Your gpa Grade is ${gpa(marks).grade} Your Points is ${gpa(marks).points} </p>
   `  
}





