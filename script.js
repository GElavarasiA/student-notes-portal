let notesList = document.getElementById("notes");

function uploadNotes(){

let subject = document.getElementById("subject").value;

if(subject == ""){
alert("Enter Subject Name");
return;
}

let li = document.createElement("li");

li.innerHTML = subject + " Notes Uploaded";

notesList.appendChild(li);

document.getElementById("subject").value="";
}