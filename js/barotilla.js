// Get all buttons and popup elements
const openPopupBtns = document.querySelectorAll(".openPopupBtn");
const popups = document.querySelectorAll(".popup");
const closeBtns = document.querySelectorAll(".close");
const categoryBtns = document.querySelectorAll(".category-btn");
const foodItems = document.querySelectorAll(".lb__diner__holder");

categoryBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    const selectedCategory = btn.getAttribute("data-category");

    foodItems.forEach(item => {
      const itemCategories = item.getAttribute("data-category").split(",");

      if (selectedCategory === "all" || itemCategories.includes(selectedCategory)) {
        // Remove the hidden class to show the item
        item.classList.remove('hidden');
        item.style.display = "inline-block"; // Ensure display is set properly
        setTimeout(() => {
          item.style.transform = "translateX(0)"; // Reset the position after displaying
        }, 50); // Small delay to trigger animation
      } else {
        // Add the hidden class to move and fade out the item
        item.classList.add('hidden');
        item.style.transform = "translateX(-100px)";
        // After transition ends, set display to none to hide it completely
        setTimeout(() => {
          if (item.classList.contains('hidden')) {
            item.style.display = "none";
          }
        }, 600);  // Timeout matches the CSS transition duration (0.6s)
      }
    });
  });
});


// Function to open the corresponding popup
openPopupBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    const popupId = btn.getAttribute("data-popup");
    document.getElementById(popupId).style.display = "block";
  });
});

// Function to close popups when clicking close button
closeBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    btn.closest(".popup").style.display = "none";
  });
});

// Close the popup when clicking outside of the popup content
window.onclick = function(event) {
  if (event.target.classList.contains('popup')) {
    event.target.style.display = "none";
  }
};