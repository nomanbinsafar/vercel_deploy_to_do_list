const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function clearData() {
  localStorage.removeItem("data");
  listContainer.innerHTML = ''; 
}
function addTask(){
    if(inputBox.value===''){
        alert("You must write something!");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let crossBtn=document.createElement("button");
        crossBtn.innerHTML="\u00d7";
        crossBtn.className="crossBtn"
        li.appendChild(crossBtn);
        let editBtn=document.createElement("button");
        editBtn.innerHTML="&#9999";
        editBtn.className="editBtn";
        li.appendChild(editBtn);

    }
    inputBox.value="";
    saveData();

}
listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.classList.contains("crossBtn")) {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.classList.contains("editBtn")) {
    let taskText = e.target.parentElement.firstChild.textContent;
    let newText = prompt("Edit task:", taskText);
    if (newText !== '') {
      e.target.parentElement.firstChild.textContent = newText;
      saveData();
    }else{
      alert("You must write something!");
    }
  }
}, false);

function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){
  listContainer.innerHTML=localStorage.getItem("data");

}
showData();