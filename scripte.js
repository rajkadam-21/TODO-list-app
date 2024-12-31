const add = document.getElementById("add");
const list = document.getElementById("container");
const list2 = document.getElementById("container2");
const div = document.getElementById("Done");
const div2 = document.getElementById("div2");
let todo = [];
let done = [];

div.style.display = "none";

function checkToDo() {
  console.log(todo.length);
}

function addItem() {
  document.getElementById("no_todo").style.display = "none";
  let task = document.getElementById("task").value;
  document.getElementById("task").value = "";
  if (task != "") {
    todo.push(task);
  }
  list.innerHTML = todo
    .map((e) => `<li onclick ='deleteItem("${e}")'>${e}</li>`)
    .join(" ");
}

function deleteItem(task) {
  todo = todo.filter((e) => e != task);
  list.innerHTML = todo
    .map((e) => `<li onclick ='deleteItem("${e}")'>${e}</li>`)
    .join(" ");
  done.push(task);
  list2.innerHTML = done.map((e) => `<li>${e}</li>`).join(" ");

  if (todo.length <= 0) {
    console.log("om");
    document.getElementById("no_todo").style.display = "block";
  }
  if (done.length > 0) {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}
let raj = document.getElementById("Done");

add.addEventListener("click", addItem);
