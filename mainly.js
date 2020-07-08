var inputbox = document.getElementById("inp-box");
var inputvalue = inputbox.value;
console.log(inputbox) ; 
function equal() {
  var val = inputbox.value;
  if (val) {
    inputbox.value = eval(inputbox.value);
  }
}
function insert(num) {
  inputbox.value = inputbox.value + num;
  console.log("ok")

}
function clr() {
  inputbox.value = "";
}

inputbox.addEventListener("input", function (e) {
  if (!Number(e.target.value)) {
    alert("Enter the valid value");
    inputbox.value = "";
  }
});

