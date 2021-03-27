//selector
const todoinput= document.querySelector(".todo-input");
const todobutton= document.querySelector(".todo-button");
const todolist= document.querySelector(".todo-list");
const filteroption= document.querySelector(".filter-todo");
//add event listener

document.addEventListener("DOMContentLoaded", gettodos);

todobutton.addEventListener("click", addtodo);
todolist.addEventListener("click", deletecheck);


//function


function addtodo(e) {
        //auto reload
        e.preventDefault();
        
        
     
            //todo div

            if(todoinput.value.length){
                const tododiv= document.createElement("div");
        tododiv.classList.add("todo");
    
        let newtodo = document.createElement("li");
        newtodo.innerText= todoinput.value;
        newtodo.classList.add("todo-item");
        tododiv.appendChild(newtodo);


//localstorage
        savelocaltodos(todoinput.value);
    
        const  completebutton= document.createElement("button");
        completebutton.innerHTML= '<i class="fas fa-check"></i>';
        completebutton.classList.add("complete-btn")
        tododiv.appendChild(completebutton);
    
        const  trashbutton= document.createElement("button");
        trashbutton.innerHTML= '<i class="fas fa-trash"></i>';
        trashbutton.classList.add("trash-btn")
        tododiv.appendChild(trashbutton);
    
    
        //append to list
        todolist.appendChild(tododiv);
    
        todoinput.value.trim();
        todoinput.value ="";
            }
            
  
        
    }


    function deletecheck(e){
        let item= e.target;

        if(item.classList[0]==="trash-btn"){
            
            let todo =item.parentElement;
            todo.classList.add("fall");
            removeTodos(todo);
            todo.addEventListener("transitionend", function(){
                todo.remove();
            })

            
        }

        //
        if(item.classList[0]==="complete-btn"){
            item.parentElement.classList.toggle("completed");
        }

    }



   

    //save to local storage

    function savelocaltodos(todo) {
        //is it available?
        let todos;
        if(localStorage.getItem('todos')===null){
            todos=[];
        }else{
            todos= JSON.parse(localStorage.getItem('todos'));
        }

        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));

    }


    function gettodos(){

        console.log("hellow")
        let todos;
        if(localStorage.getItem('todos')===null){
            todos=[];
        }else{
            todos= JSON.parse(localStorage.getItem('todos'));
        }


        todos.forEach(function(todo){

            const tododiv= document.createElement("div");
        tododiv.classList.add("todo");
    
        let newtodo = document.createElement("li");
        newtodo.innerText= todo;
        newtodo.classList.add("todo-item");
        tododiv.appendChild(newtodo);



    
        const  completebutton= document.createElement("button");
        completebutton.innerHTML= '<i class="fas fa-check"></i>';
        completebutton.classList.add("complete-btn")
        tododiv.appendChild(completebutton);
    
        const  trashbutton= document.createElement("button");
        trashbutton.innerHTML= '<i class="fas fa-trash"></i>';
        trashbutton.classList.add("trash-btn")
        tododiv.appendChild(trashbutton);
    
    
        //append to list
        todolist.appendChild(tododiv);

        })
    }


    
    function removeTodos(todo) {
        let todos;
        if(localStorage.getItem('todos')===null){
            todos=[];
        }else{
            todos= JSON.parse(localStorage.getItem('todos'));
        }

        let todoindex=todo.children[0].innerText;

        todos.splice(todos.indexOf(todoindex),1);

        localStorage.setItem("todos", JSON.stringify(todos));



    }
