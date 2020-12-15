function goOnline() {
  var x = document.getElementById("online");
  var y = document.getElementById("offline");
  x.style.display = "block";
  y.style.display = "none";
}
function goOffline() {
  var x = document.getElementById("online");
  var y = document.getElementById("offline");
  y.style.display = "block";
  x.style.display = "none";
}
// the modal
var modal = document.getElementById("modalEnterName");

var btn = document.getElementById("newGame");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
//Enter name
function sendName() {
  //Get Name
  var userName = document.getElementById("name").value;
  //Send Id
  var blockName = document.getElementById("name-container");
  var blockID = document.getElementById("id-container");
  var x = Math.floor(Math.random() * 100000 + 1);
  var inputId = document.getElementById("userId");
  inputId.setAttribute("value", x);
  blockName.style.display = "none";
  blockID.style.display = "block";
}
//copy text
function copyFunc() {
  var copyText = document.getElementById("userId");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
