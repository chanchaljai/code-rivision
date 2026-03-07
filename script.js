let notes = JSON.parse(localStorage.getItem("notes")) || [];

function showNotes(){
let list = document.getElementById("notesList");
list.innerHTML="";

notes.forEach(function(note){
let li=document.createElement("li");
li.textContent=note;
list.appendChild(li);
});
}

function addNote(){

let input=document.getElementById("noteInput");
let note=input.value;

notes.push(note);

localStorage.setItem("notes",JSON.stringify(notes));

input.value="";

showNotes();
}

showNotes();