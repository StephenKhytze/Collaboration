// Get all buttons and popup elements
const openPopupBtns = document.querySelectorAll(".openPopupBtn");
const popups = document.querySelectorAll(".popup");
const closeBtns = document.querySelectorAll(".close");
const categoryBtns = document.querySelectorAll(".category-btn");
const foodItems = document.querySelectorAll(".lb__diner__holder");

// Function to filter food items based on category
categoryBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    const selectedCategory = btn.getAttribute("data-category");
    removeActiveMenu();
    btn.classList.add('active');
    foodItems.forEach(item => {
      const itemCategories = item.getAttribute("data-category").split(",");

      if (selectedCategory === "all" || itemCategories.includes(selectedCategory)) {
        item.style.scale = 1;
        item.style.position = 'relative'
      } else {
        item.style.scale = 0;
        item.style.position = 'absolute'
      }
    });
  });
}); 

function removeActiveMenu() {
  categoryBtns.forEach((btn) => {
      btn.classList.remove('active');
  });
}


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
