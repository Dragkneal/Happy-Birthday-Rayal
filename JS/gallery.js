// Popup Image
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
  
// Close the popup when the close button is clicked
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