// __________________________________________________________________________variablesNeededAsGlobal
var howManyTasks=0;

// __________________________________________________________________________ADD A TASK
function add()
{   
    if(document.getElementsByClassName('inputChecker')[0].value.trim()!=0)
    {   
        document.getElementById('save').disabled = false;
        howManyTasks++;
        let title = document.getElementById('title').value;
        title= title.charAt(0).toUpperCase() + title.toLowerCase().slice(1);
        let type;
        if (document.getElementById('feature').checked){
            type=document.getElementById('feature').value;
        }
        else if (document.getElementById('bug').checked){
            type=document.getElementById('bug').value;
        }
        let priority =document.getElementById('priority').value;
        let description =document.getElementById("Description").value;
        let shortDescription;
        if(description.length>30)
        {
            shortDescription = description.slice(0,30)+"...";
        }
        else
        {
            shortDescription = description;
        } 
        let Deadline;
        Deadline =document.getElementById('date').value;
        let creationDate = Date().slice(0,21);
        let button = `  <button id="${"Task"+howManyTasks}" class="list-group-item-action mx-0 border row bg-white align-items-center  pb-4px" onclick="fullVIew()" data-bs-toggle="modal" data-bs-target="#fullView${howManyTasks}">
                            <div class="col-1">
                                <i class="bi bi-question-square text-green fs-18px"></i> 
                            </div>
                            <div class="col-11">
                                <div class="text-dark fw-bolder fs-5 ">${title}</div>
                                <div class="">
                                    <div class="text-muted fs-5">#${howManyTasks} Created in ${creationDate}</div>
                                    <div class="mt-2 fs-5">${shortDescription}</div>
                                </div>
                                <div class="mt-1">
                                    <span class="bg-primary fs-13px text-white fw-bold" style="letter-spacing:1.3px;border-radius:8px; padding: 2px 4.5px 2px 5px;">${priority}</span>
                                    <span class=" fs-13px text-dark fw-bold"style="letter-spacing:1.3px;  background-color: rgb(202, 202, 202); border-radius:8px; padding: 2px 4.5px 2px 5px;">${type}</span>
                                </div>
                            </div>
                        </button>
                        <div class="modal fade" id="fullView${howManyTasks}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		                <div class="modal-dialog modal-dialog-centered">
			                <div class="modal-content">

			                    <div class="modal-header">
				                    <div class="h2">${title} (${type})</div>
			                    </div>

			                    <div class="modal-body">
                                    <div class="row">
                                        <h4 class="text-dark col-3">Created on:</h4>
                                        <span class="text-green fs-15px col-9">${creationDate}</span>
                                    </div>                             
                                    
                                    <div class="row mt-15px">
                                        <h4 class="text-dark col-3"">Deadline:</h4>
                                        <span class="text-danger fs-15px col-9">${Deadline}</span>
                                    </div>
                                    <div class="row mt-15px">
                                        <h4 class="text-dark col-3"">Priority:</h4>
                                        <span class="text-muted fs-15px col-9">${priority}</span>
                                    </div>
                                    <div class="row mt-15px ">		
                                        <h4 class="text-dark col-3"">Description:</h4>
                                        <span class="text-muted fs-15px col-9" style="width:400px;overflow:hidden;">${description}</span>
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


// __________________________________________________________________________fullView A TASK
function fullView()
{
   
}  
