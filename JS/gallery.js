const picContainerA = document.querySelectorAll(".dream-a");
const picContainerB = document.querySelectorAll(".dream-b");
const picContainerC = document.querySelectorAll(".dream-c");

const amountOfPicToAdd = 133;
const amountOfPicToAdd2 = amountOfPicToAdd * 2;
const amountOfPicToAdd3 = amountOfPicToAdd * 3;

// Add picture
function addPic() {
  
  for (let i = amountOfPicToAdd + 1; i <= amountOfPicToAdd2 - 9; i++) {
    const newPic = document.createElement("img");
    newPic.setAttribute("src", `../Images/Raylo/${i}.jpg`);
    newPic.setAttribute("alt", `Raylo ${i}`);
    newPic.classList.add("clickable-image");
    newPic.style.maxWidth = '100%';
    newPic.style.height = 'auto';

    picContainerA.forEach(container => {
      container.appendChild(newPic);
    });
  }
}
function addPic2() {
  for (let i = 1; i <= amountOfPicToAdd; i++) {
    const newPic = document.createElement("img");
    newPic.setAttribute("src", `../Images/Raylo/${i}.jpg`);
    newPic.setAttribute("alt", `Raylo ${i}`);
    newPic.classList.add("clickable-image");
    newPic.style.maxWidth = '100%';
    newPic.style.height = 'auto';

    picContainerB.forEach(container => {
      container.appendChild(newPic);
    });
  }
}
function addPic3() {
  for (let i = amountOfPicToAdd2 + 1; i <= amountOfPicToAdd3 - 10; i++) {
    const newPic = document.createElement("img");
    newPic.setAttribute("src", `../Images/Raylo/${i}.jpg`);
    newPic.setAttribute("alt", `Raylo ${i}`);
    newPic.classList.add("clickable-image");
    newPic.style.maxWidth = '100%';
    newPic.style.height = 'auto';

    picContainerC.forEach(container => {
      container.appendChild(newPic);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  addPic();
  addPic2();
  addPic3();

  // Popup Image
const clickableImage = document.querySelectorAll(".clickable-image");
document.querySelectorAll(".clickable-image").forEach(image => {
  image.addEventListener("click", function () {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");

    // Set the popup image source to the clicked image
    popupImg.src = this.src;

    // Show the popup
    popup.classList.remove("hidden");
  });
});
  
// Close the popup when clicking the close button
document.getElementById("close").addEventListener("click", function () {
  const popup = document.getElementById("popup");
  popup.classList.add("hidden");
});
  
// Close the popup when clicking outside the image
document.getElementById("popup").addEventListener("click", function (event) {
  if (event.target.id === "popup") {
    this.classList.add("hidden");
  }
});
});
