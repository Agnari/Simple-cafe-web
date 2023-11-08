var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

function showMenu(menuType) {
    // Hide all menus
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => {
        menu.style.display = 'none';
    });

    // Show the selected menu
    const selectedMenu = document.getElementById(menuType + '-menu');
    selectedMenu.style.display = 'block';
}