let todo=[];
 
function addTask(){
    const task_input=document.getElementById('task');
    todo.push(task_input.value);
    task_input.value=''// clean your input field
    console.log('Task Added:' ,todo);
    displayData();
}
document.getElementById('btn').addEventListener('click',addTask)
 
 
function displayData(){
    const taskList=document.getElementById('tasks');
 
    if(todo.length==0){
        taskList.innerHTML='<li>The List is empty</li>'
    }
    else{
        let html=''
        for(let t of todo){
            html+=`<li class=list-group-item'>${t}
<button class='btn btn-danger float-end' onclick='deleteTask("${t}")'>X</button>
</li>`
        }
 
        taskList.innerHTML=html;
    }
}
 
function deleteTask(task){
    let foundIndex=undefined;
        for(let i=0;i<todo.length;i++){
            if(todo[i]==task){
                foundIndex=i;
                break;
            }
        }
 
        if(foundIndex!=undefined){
            todo.splice(foundIndex,1);
            alert('Task Deleted');
            displayData();
        }
}
 
displayData();
