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
