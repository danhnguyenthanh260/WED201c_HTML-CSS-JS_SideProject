/* Name this external file gallery.js */

function upDate(previewPic) {
  /* 1) Change the background image URL */
  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url(" + previewPic.src + ")";

  /* 2) Change the text */
  imageDiv.innerHTML = previewPic.alt; // Set the inner HTML to the alt text

  //Optional:  If you want to keep the image centered, you can add this:
  imageDiv.style.backgroundSize = "contain"; // Or "cover", depending on how you want it to scale
  imageDiv.style.backgroundRepeat = "no-repeat";
  imageDiv.style.backgroundPosition = "center";
}

function unDo() {
  /* 1) Update the background image URL back to the original */
  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('https://via.placeholder.com/500x300')"; // Or whatever your original image URL was.  I've used a placeholder here.

  /* 2) Change the text back to the original */
  imageDiv.innerHTML = "Hover over an image below to display here.";
  imageDiv.style.backgroundSize = ""; // Reset the background size
  imageDiv.style.backgroundRepeat = ""; // Reset the background repeat
  imageDiv.style.backgroundPosition = ""; // Reset the background position
}
