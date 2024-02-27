function addTask(){
    var a = document.getElementById("task-input").value;
    console.log(a);
    var taskItem = document.createElement("li");
    taskItem.textContent=a;
    taskItem.className="rounded-lg border-gray-200 bg-white p-6 shadow-md mt-2 flex flex-row justify-between";


     // DELETE BUTTON

     var deletebtn=document.createElement("button");

     //Set button name to delete
     deletebtn.textContent="Delete";

     //set class name for the button (styling)

     deletebtn.className='bg-red-500 text-white px-4 py-2 rounded-full';

     // Adding event listener

     deletebtn.addEventListener('click',function(){
        taskItem.remove()
        var taskCount=document.getElementById('task-list').childElementCount;
        totalTask.textContent=taskCount;
     });


     var totalTask=document.getElementById('total-task');
     var taskCount=document.getElementById('task-list').childElementCount
     totalTask.textContent=taskCount + 1;

     //append delete buttton 

     taskItem.appendChild(deletebtn);

    document.getElementById("task-list").appendChild(taskItem);
    document.getElementById('task-input').value='';

       

}

function deleteAll(){
    document.getElementById('task-list').innerHTML  ='';
    document.getElementById('total-task').innerHTML='0';
}