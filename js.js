let btn=document.querySelector('#push')
let input=document.querySelector('input')
let tasks=document.querySelector('#tasks')
let del=document.getElementsByClassName('del')



btn.addEventListener('click',function(){
    if(input.value==""){
        alert('Your input is empty')
    }
    else{
        tasks.innerHTML+=`
        <div class="task">
                        <span>

                            ${input.value}


                        </span>

                        <button class="del">
                        
                            delete
                        
                        </button>
        </div>
        
        `

        input.value=""

        let task=document.getElementsByClassName('task')

        for(let x = 0 ; x < task.length ; x++){
            task[x].addEventListener('click',function(){
                task[x].classList.toggle('completed')
            })
        }
        for(let x = 0 ; x < del.length ; x++){
            del[x].addEventListener('click',function(){
                del[x].parentNode.remove();
            })
        }


     
    
   


       


        
    }
})