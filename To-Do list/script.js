function addTask(){
    let input= document.getElementById("task");
    let taskText = input.value;
    if(taskText == ""){
        let li=document.createElement("li");
        li.innerText=taskText;
        li.onClick=function(){
            li.style.textDecoration="line-through";
        };
        document.getElementById("taskList").appendChild(li);
        input.value = "";
    }
}