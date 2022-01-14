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