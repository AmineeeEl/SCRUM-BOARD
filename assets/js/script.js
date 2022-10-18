
// __________________________________________________________________________variablesNeededAsGlobal
var howManyTasks=0;
var toDelete=0;

// __________________________________________________________________________ADD A TASK
function add()
{   
    if(document.getElementsByClassName('inputChecker')[0].value.trim()!=0)
    {   
        let Temp =[{
        title         :   '',
        type          :   '',
        priority      :   '',
        deadLine      :   '',
        creation      :   '',
        description   :   ``}];
        howManyTasks++;
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
        tasks[howManyTasks]= Temp;
        let button = ` <button id="${"Task"+howManyTasks}" class="list-group-item-action mx-0 border row bg-white align-items-center  pb-4px" data-bs-toggle="modal" data-bs-target="#fullView${howManyTasks}" >
                            <div class="col-1">
                                <i class="bi bi-question-square text-green fs-18px"></i> 
                            </div>
                            <div class="col-11">
                                <div class="text-dark fw-bolder fs-5 ">${tasks[howManyTasks].title}</div>
                                <div class="">
                                    <div class="text-muted fs-5">#${howManyTasks} Created in ${tasks[howManyTasks].creation}</div>
                                    <div class="mt-2 fs-5">${shortDescription}</div>
                                </div>
                                <div class="mt-1">
                                    <span class="bg-primary fs-13px text-white fw-bold" style="letter-spacing:1.3px;border-radius:8px; padding: 2px 4.5px 2px 5px;">${tasks[howManyTasks].priority}</span>
                                    <span class=" fs-13px text-dark fw-bold"style="letter-spacing:1.3px;  background-color: rgb(202, 202, 202); border-radius:8px; padding: 2px 4.5px 2px 5px;">${tasks[howManyTasks].type}</span>
                                </div>
                            </div>
                        </button>
                        <div class="modal fade" id="fullView${howManyTasks}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		                <div class="modal-dialog modal-dialog-centered">
			                <div class="modal-content">

			                    <div class="modal-header">
				                    <div class="h2">${tasks[howManyTasks].title} (${tasks[howManyTasks].type})</div>
			                    </div>

			                    <div class="modal-body">
                                    <div class="row">
                                        <h4 class="text-dark col-3">Created on:</h4>
                                        <span class="text-muted fs-15px col-9">${tasks[howManyTasks].creation}</span>
                                    </div>                             
                                    
                                    <div class="row mt-15px">
                                        <h4 class="text-dark col-3"">Deadline:</h4>
                                        <span class="text-danger fs-15px col-9">${tasks[howManyTasks].deadLine}</span>
                                    </div>
                                    <div class="row mt-15px">
                                        <h4 class="text-dark col-3"">Priority:</h4>
                                        <span class="text-muted fs-15px col-9">${tasks[howManyTasks].priority}</span>
                                    </div>
                                    <div class="row mt-15px ">		
                                        <h4 class="text-dark col-3"">Description:</h4>
                                        <span class="text-muted fs-15px col-9" style="width:400px;overflow:hidden;">${tasks[howManyTasks].description}</span>
                                    </div>
                                    <div class="modal-footer">
                                    <button id="Delete${howManyTasks}" onclick="deleteTask(this.id)" type="button" class="btn btn-danger" data-bs-dismiss="modal">Delete</button>
                                    </div>
	                            </div>
                            </div>
			            </div>
		                </div>`;               
        toDoCard.innerHTML+=button;
        document.getElementById('title').value="";
        document.getElementById('Description').value="";
        $('#modal-task').modal('hide')
    }

}


// __________________________________________________________________________DELET A TASK
function deleteTask(ID)
{   
    let idToDelete=ID.slice(-1);
    // tasks[idToDelete]=tasks[idToDelete+1];
    delete tasks[idToDelete];
    console.log(tasks);
    let btnID = `Task${idToDelete }`;
    const hamid =document.getElementById('btnID');
    alert(btnID);
    hamid.remove();
    // alert(btnID);
    
}
