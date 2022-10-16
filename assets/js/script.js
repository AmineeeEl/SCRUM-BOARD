var howManyTasks=0;



// __________________________________________________________________________ADDING A TASK

document.getElementById('save').onclick = function test(){
    howManyTasks++;
    let title = document.getElementById('title').value;

    var type;
    if (document.getElementById('feature').checked){
        type=document.getElementById('feature').value;
    }
    else if (document.getElementById('bug').checked){
        type=document.getElementById('bug').value;
    }
    
    let priority =document.getElementById('priority').value;

    let description =document.getElementById('Description').value;

    let button = `<button id="${"Task"+howManyTasks}" class="list-group-item-action mx-0 border row bg-white align-items-center  pb-4px">
    <div class="col-1"style="">
        <i class="bi bi-question-square text-green fs-18px"></i> 
    </div>
    <div class="col-11"style="">
        <div class="text-dark fw-bolder fs-5 ">${title.trim()}</div>
        <div class="">
            <div class="text-muted fs-5">#${howManyTasks} Created in ${Date().slice(0,21)}</div>
            <div class="mt-2 fs-5" title="${description+"..."}</div>
        </div>
        <div class="mt-1">
            <span class="bg-primary fs-13px text-white fw-bold" style="letter-spacing:1.3px;border-radius:8px; padding: 2px 4.5px 2px 5px;">${priority}</span>
            <span class=" fs-13px text-dark fw-bold"style="letter-spacing:1.3px;  background-color: rgb(202, 202, 202); border-radius:8px; padding: 2px 4.5px 2px 5px;">${type}</span>
        </div>
    </div>
</button>`;
    toDoCard.innerHTML+=button;
    
};

