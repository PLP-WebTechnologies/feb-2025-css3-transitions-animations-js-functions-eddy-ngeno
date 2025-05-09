// Load saved color preference on page load
window.onload = () => {
  const savedColor = localStorage.getItem("boxColor");
  if (savedColor) {
    document.getElementById("box").style.backgroundColor = savedColor;
    document.getElementById("colorInput").value = savedColor;
  }
};

// Save color to localStorage and update box color
function savePreference() {
  const color = document.getElementById("colorInput").value;
  localStorage.setItem("boxColor", color);
  document.getElementById("box").style.backgroundColor = color;
}

// Animate the box using CSS class
function animateBox() {
  const box = document.getElementById("box");
  box.classList.add("bounce");

  // Remove the class after animation to allow re-triggering
  setTimeout(() => {
    box.classList.remove("bounce");
  }, 1000);
}
