console.log("Hello World")

// $(".bg-primary").on("click", function() {
//     $(this).hide();
// })

function menuToggle() {
    var menu = document.getElementById('mobile-sidebar-container');

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

$(document).ready(function() {
    // Your jQuery code here
    // This code will run when the DOM is fully loaded
    document.getElementById('mobile-sidebar-container').style.display = "none";
});