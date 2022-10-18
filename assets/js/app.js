/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

readTask();
function saveTask(){
    // FORM VALIDATION
    if(document.getElementsByClassName('inputChecker')[0].value.trim()!=0)
    { 
        let Temp =[{
            title         :   '',
            type          :   '',
            priority      :   '',
            status        :   '',
            deadLine      :   '',
            creation      :   '',
            description   :   ``}];
            Temp.status="toDo";
        Temp.title = document.getElementById('title').value;
        Temp.title = Temp.title .charAt(0).toUpperCase() + Temp.title .toLowerCase().slice(1);
        
        if (document.getElementById('feature').checked){
            Temp.type=document.getElementById('feature').value;
        }
        else if (document.getElementById('bug').checked){
            Temp.type=document.getElementById('bug').value;
        }
        Temp.priority =document.getElementById('priority').value;
        Temp.description =document.getElementById("Description").value;
        let shortDescription;
        if(Temp.description.length>30)
        {
            shortDescription = Temp.description.slice(0,30)+"...";
        }
        else
        {
            shortDescription = Temp.description;
        } 
        
        Temp.deadLine =document.getElementById('date').value;
        Temp.creation = Date().slice(0,21);
        
        // ADD TO THE ARRR
        tasks.push(Temp);
        document.getElementById('title').value="";
        document.getElementById('Description').value="";
        $('#modal-task').modal('hide')
    }
    else{
        alert("Please enter a title!");   // working on a better looking error ... :)
    }
    
}

function clearTask(){
    document.getElementById('doneCard').innerHTML="";
    document.getElementById('inProgessCard').innerHTML="";
    document.getElementById('toDoCard').innerHTML="";
}

function readTask()
{
    let button;
    let shortDescription;
    let toDoCount=0, doneCount=0, inProgessCount=0;
    for(let i =0 ;i<tasks.length;i++)
    {
        if(tasks[i].description.length>30)
        {
            shortDescription = tasks[i].description.slice(0,30)+"...";
        }
        else
        {
            shortDescription = tasks[i].description;
        }  
        button = ` <button id="${"myButton"+i}" class="list-group-item-action mx-0 border row bg-white align-items-center  pb-4px" data-bs-toggle="modal" data-bs-target="#fullView" onclick="fullViewOfTheTask(this.id)">
        <div class="col-1">
        <i class="bi bi-question-square text-green fs-18px"></i> 
        </div>
        <div class="col-11">
        <div class="text-dark fw-bolder fs-5 ">${tasks[i].title}</div>
        <div class="">
        <div class="text-muted fs-5">#${i} Created in ${tasks[i].creation}</div>
        <div class="mt-2 fs-5" title="${tasks[i].description}">${shortDescription}</div>
        </div>
        <div class="mt-1">
        <span class="bg-primary fs-13px text-white fw-bold" style="letter-spacing:1.3px;border-radius:8px; padding: 2px 4.5px 2px 5px;">${tasks[i].priority}</span>
        <span class=" fs-13px text-dark fw-bold"style="letter-spacing:1.3px;  background-color: rgb(202, 202, 202); border-radius:8px; padding: 2px 4.5px 2px 5px;">${tasks[i].type}</span>
        </div>
        </div></button>` 
        if(tasks[i].status=="toDo")
        {
            document.getElementById('toDoCard').innerHTML+=button;
            toDoCount++;
        }
        else if(tasks[i].status=="inProgess")
        {
            document.getElementById('inProgessCard').innerHTML+=button;
            inProgessCount++;
        }
        else if(tasks[i].status=="done")
        {
            document.getElementById('doneCard').innerHTML+=button;
            doneCount++;
        }
         
    }
    document.getElementById('to-do-tasks-count').innerText=toDoCount;
    document.getElementById('in-progress-tasks-count').innerText=inProgessCount;
    document.getElementById('done-tasks-count').innerText=doneCount;
    
}

function CreateTask() {
    // SAVE
    saveTask();
    // CLEAR
    clearTask();
    // READ
    readTask();
}

function editTask(ID) 
{   
    let index=ID.slice(0,1);
    
    
    // SAVE

    // CLEAR

    // READ

}

function deleteTask(ToDelete) {
    // DELETE
    indexToDelete = ToDelete.slice(0,1);
    tasks.splice(indexToDelete,1);
    // CLEAR
    clearTask();
    // READ
    readTask();
}

function fullViewOfTheTask(ID) {
    let index=ID.slice(-1);
    document.getElementById('creationDateSpan').innerText=tasks[index].creation;
    document.getElementById('deadlineSpan').innerText=tasks[index].deadLine;
    document.getElementById('prioritySpan').innerText=tasks[index].priority;
    document.getElementById('descriptionSpan').innerText=tasks[index].description   ;
    document.getElementById('fullViewHeader').innerText=tasks[index].title+" ("+ tasks[index].type+")"
    let btn=document.querySelector('[name="deleteTaskBtn"]');
    btn.setAttribute('id',index+"Delete");
    document.querySelector('[name="editTaskBtn"]').setAttribute('id',index+"Edit");
    
};