let currentSection = 0;
let sections;

/* Wait until HTML is fully loaded */
document.addEventListener("DOMContentLoaded", () => {
  sections = document.querySelectorAll(".section");

  // Show first section on load
  sections[0].classList.add("active");
});

/* MAIN SECTION NAVIGATION */
function nextSection() {
  if (currentSection < sections.length - 1) {
    sections[currentSection].classList.remove("active");
    currentSection++;

    sections[currentSection].classList.add("active");

    // Always scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    // Reload Instagram embeds for reels
    setTimeout(() => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }, 400);
  }
}

/* 🔑 FIX: Reel button uses same logic */
function nextReel() {
  nextSection();
}

/* ---------------- PHOTO SLIDER ---------------- */

let photoIndex = 0;
const photos = [
  {
    src: "C:\Users\admin\Documents\Keerthana\images\Image.jpeg",
    text: "This moment still makes me smile."
  }
];

function nextPhoto() {
  photoIndex = (photoIndex + 1) % photos.length;
  document.getElementById("photo").src = photos[photoIndex].src;
  document.getElementById("photo-text").innerText = photos[photoIndex].text;
}
