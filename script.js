console.log("Nuryshev Kaisar | SE-2434");
function showAlert() {
  alert("opss...");
}

var name = "Kaisar";
var age = 18;
var isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

var num1 = 10;
var num2 = 5;
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2); 
console.log("Multiplication:", num1 * num2); 
console.log("Division:", num1 / num2); 

var firstName = "Kaisar";
var lastName = "Nuryshev";
console.log("Full Name:", firstName + " " + lastName);

var isOriginalText = true;
function changeText() {
  var paragraph = document.getElementById("myParagraph");
  if (isOriginalText == true) {
    paragraph.innerHTML = "We'll never get together like this.";
    isOriginalText = false;
  } else {
    paragraph.innerHTML = "Let's get together this weekend!";
    isOriginalText = true;
  }
}

var isOriginalBg = true;
var isOriginalFont = true;
function changeBgColor() {
  var div = document.getElementById("myDiv");
  if (isOriginalBg == true) {
    div.style.backgroundColor = "lightgray";
    isOriginalBg = false;
  } else {
    div.style.backgroundColor = "white";5
    isOriginalBg = true;
  }
}
function changeFontSize() {
  var div = document.getElementById("myDiv");
  if (isOriginalFont == true) {
    div.style.fontSize = "20px";
    isOriginalFont = false;
  } else {
    div.style.fontSize = "";
    isOriginalFont = true;
  }
}

var itemCount = 1;
function addItem() {
  var list = document.getElementById("myList");
  var newItem = document.createElement("li");
  newItem.innerHTML = "Element " + itemCount;
  list.appendChild(newItem);
  itemCount = itemCount + 1;
}
function removeItem() {
  var list = document.getElementById("myList");
  var lastItem = list.lastChild;
  if (lastItem) {
    list.removeChild(lastItem);
  }
}

var box = document.getElementById("myBox");
box.onmouseover = function() {
  box.style.backgroundColor = "green";
};
box.onmouseout = function() {
  box.style.backgroundColor = "white";
};

var input = document.getElementById("myInput");
input.onkeyup = function() {
  var text = input.value;
  document.getElementById("output").innerHTML = "Typed text: " + text;
};

function calculate(operation) {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var result;

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (num1 == "" || num2 == "" || isNaN(num1) || isNaN(num2)) {
    result = "fill all fields!";
  } else {
    if (operation == "+") {
      result = num1 + num2;
    }
    if (operation == "-") {
      result = num1 - num2;
    }
    if (operation == "*") {
      result = num1 * num2;
    }
    if (operation == "/") {
      if (num2 == 0) {
        result = "Division by 0!";
      } else {
        result = num1 / num2;
      }
    }
  }
  document.getElementById("result").innerHTML = "Result: " + result;
}

var tasks = [];

function addTask() {
  var taskText = document.getElementById("taskInput").value;
  var taskDescription = document.getElementById("taskDescription").value;
  if (taskText != "") {
    var task = {
      text: taskText,
      description: taskDescription,
      completed: false
    };
    tasks.push(task);
    document.getElementById("taskInput").value = "";
    document.getElementById("taskDescription").value = "";
    showTasks();
  }
}

function showTasks() {
  var list = document.getElementById("taskList");
  list.innerHTML = "";
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var newItem = document.createElement("li");
    if (task.completed == true) {
      newItem.style.backgroundColor = "lightgray";
    } else {
      newItem.style.backgroundColor = "white";
    }
    newItem.innerHTML = "<div class='task-title'>" + task.text + "</div>";
    if (task.description != "") {
      newItem.innerHTML += "<div class='task-description'>" + task.description + "</div>";
    }
    var completeButtonText = task.completed ? "Undo" : "Complete";
    newItem.innerHTML += " <button onclick='toggleComplete(" + i + ")'>" + completeButtonText + "</button>";
    newItem.innerHTML += " <button onclick='deleteTask(" + i + ")'>Delete</button>";
    list.appendChild(newItem);
  }
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  showTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  showTasks();
}