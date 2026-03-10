function uploadNotes(){

let subject = document.getElementById("subject").value;

if(subject === ""){
alert("Please enter subject name");
return;
}

let list = document.getElementById("notesList");

let li = document.createElement("li");

li.innerHTML = subject + " notes uploaded";

list.appendChild(li);

document.getElementById("subject").value="";
}