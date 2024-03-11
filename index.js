// function addlist(){
//     var taskname=document.getElementById('taskname').value 
//     var tododiv=document.getElementById('mytodo')

//     var newtodoitem=document.createElement('div')
//     var todoname=document.createElement('li')
//     todoname.innerHTML=taskname
//     var deletebtn=document.createElement('i')
//     deletebtn.classList.add('far')
//     deletebtn.classList.add('fa-trash-alt')
//     newtodoitem.appendChild(todoname)
//     newtodoitem.appendChild(deletebtn)
//     tododiv.appendChild(newtodoitem)
// }
function addlist() {
    var taskname = document.getElementById('taskname').value;
    var tododiv = document.getElementById('mytodo');

    var newtodoitem = document.createElement('div');
    var todoname = document.createElement('li');
    todoname.innerHTML = taskname;

    var deletebtn = document.createElement('i');
    deletebtn.classList.add('far');
    deletebtn.classList.add('fa-trash-alt');
    deletebtn.addEventListener('click', function() {
        tododiv.removeChild(newtodoitem);
    });

    newtodoitem.appendChild(todoname);
    newtodoitem.appendChild(deletebtn);
    tododiv.appendChild(newtodoitem);
}
