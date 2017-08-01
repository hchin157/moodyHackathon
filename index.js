function alerter() {
  var value = document.getElementById("todo-text").value;

  var list = document.getElementById("ulist");

  var elem = document.createElement('li');

  elem.innerHTML = value;
  elem.className = "list-group-item";

  list.appendChild(elem);
}
