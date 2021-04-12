// Loading file from user

function loadFile(event) {
  const tempURL = URL.createObjectURL(event.target.files[0]);
  document.getElementById("text").style.backgroundImage = `url(${tempURL})`;
  document.getElementById("input").style.visibility = "hidden";
  document.getElementById("title").style.visibility = "hidden";
}

// Taking a screenshot

// document.getElementById("download-btn").addEventListener("click", function () {
// html2canvas(document.getElementById("portrait")).then(function (canvas) {
// document.getElementById("output").appendChild(canvas);
// });
// });
