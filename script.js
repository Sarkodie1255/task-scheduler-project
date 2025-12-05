const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
  const value = inputBox.value.trim();
  if (!value) {
    alert("must write something!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = value;              // safer than innerHTML
  const span = document.createElement("span");
  span.textContent = "\u00D7";        // close (×)
  span.className = "close";
  li.appendChild(span);
  listContainer.appendChild(li);

  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function(e){
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked"); // classList (capital L)
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
  const data = localStorage.getItem("data");
  if (data) listContainer.innerHTML = data; // innerHTML (lowercase i)
}

showTask();
