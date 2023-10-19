const fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", loadJSON);

function loadJSON(event) {
  try {
    const content = document.querySelector(".result");
    const reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    reader.addEventListener("load", function () {
      console.log(reader.result);
    });
    //window.location.href = "newpage.html";
  } catch (error) {
    const errorParagraph = document.querySelector(".error");
    errorParagraph.style.color = "#BF0E0E";
    errorParagraph.innerHTML = "Invalid file. Please load a valid JSON file.";
    fileInput.appendChild(errorParagraph);
  }
}
