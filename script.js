const dropArea = document.querySelector(".drag-area"),
  dragText = dropArea.querySelector("header"),
  button = dropArea.querySelector("button"),
  input = dropArea.querySelector("input");
let file;

button.onclick = () => {
  input.click();
};

input.addEventListener("change", function () {
  file = this.files[0];
  dropArea.classList.add("active");
  showFile();
});

dropArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});

dropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  file = event.dataTransfer.files[0];
  showFile();
});

function showFile() {const dropArea = document.querySelector(".drag-area"),
  dragText = dropArea.querySelector("header"),
  button = dropArea.querySelector("button"),
  input = dropArea.querySelector("input");
let file;

button.onclick = () => {
  input.click();
};

input.addEventListener("change", function () {
  file = this.files[0];
  dropArea.classList.add("active");
  showFile();
});

dropArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});

dropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  file = event.dataTransfer.files[0];
  showFile();
});

function showFile() {
  let fileType = file.type;
  let validExtensions = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];
  if (validExtensions.includes(fileType)) {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileType === "application/pdf") {
        let fileURL = fileReader.result;
        let pdfTag = `<embed src="${fileURL}" type="application/pdf" width="100%" height="600px" />`;
        dropArea.innerHTML = pdfTag;
      } else {
        let fileURL = fileReader.result;
        let imgTag = `<img src="${fileURL}" alt="image">`;
        dropArea.innerHTML = imgTag;
      }
    };
    fileReader.readAsDataURL(file);
  } else {
    alert("This is not a supported file format!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}

  let fileType = file.type;
  let validExtensions = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];
  if (validExtensions.includes(fileType)) {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileType === "application/pdf") {
        let fileURL = fileReader.result;
        let pdfTag = `<embed src="${fileURL}" type="application/pdf" width="100%" height="600px" />`;
        dropArea.innerHTML = pdfTag;
      } else {
        let fileURL = fileReader.result;
        let imgTag = `<img src="${fileURL}" alt="image">`;
        dropArea.innerHTML = imgTag;
      }
    };
    fileReader.readAsDataURL(file);
  } else {
    alert("This is not a supported file format!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}
