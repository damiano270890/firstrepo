var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var valueList = document.getElementsByTagName("li");
var deleteElementList  = document.getElementById("list");

function sbarraElemento(e) {
    if (e.target.tagName === 'LI'){
      e.target.setAttribute("class", "done");  // Check if the element is a LI
    }
};



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var buttonDel = document.createElement("button");
	var icon = "delete";
	li.appendChild(document.createTextNode(input.value));
	buttonDel.setAttribute("class", "material-icons delBut");
	buttonDel.appendChild(document.createTextNode(icon));
	li.appendChild(buttonDel);
	ul.appendChild(li);
	input.value = "";
}

// var listLenght = document.getElementById("list").getElementsByTagName("li").length;

// currentElement = document.getElementById("list").getElementsByTagName("li");

function removeItemAfterClick(e){
	 // if (e.target.tag === deleteElementList){
	 	// console.log(e.target.tagName);
	 	// deleteElementList.querySelector("li").remove();
	 	e.target.parentNode.remove();
		// e.deleteElementList.remove();
		// deleteElementList.removeChild(deleteElementList.childNodes[i]);
	

}
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


// button.addEventListener("click", addListAfterClick);
button.addEventListener("click", addListAfterClick);

deleteElementList.addEventListener("click", removeItemAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener('click', sbarraElemento);
// valueList.addEventListener("click", doneElement);