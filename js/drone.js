$(document).ready(function() {
    $("#sidebarButton").click(function () {
        if (document.getElementById("mySidebar").style.width == '250px') {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("sidebarButton").classList.remove("bi-x");
            document.getElementById("sidebarButton").classList.add("bi-list");

        } else {
            document.getElementById("mySidebar").style.width = "250px";
            document.getElementById("sidebarButton").classList.remove("bi-list");
            document.getElementById("sidebarButton").classList.add("bi-x");
        }
    });

    $("#show").click(function () {
        if (this.className.includes('plus')) {
            $("#show").html('<img class="plus-button-icon" src="css/img/minus.png" alt="minus">show less');
            $("#show").removeClass('plus');
            $("#show").addClass('minus');
        } else {
            $("#show").html('<img class="plus-button-icon" src="css/img/plus.png" alt="plus">show more');
            $("#show").removeClass('minus');
            $("#show").addClass('plus');
        }
    });

    new TypeIt("#welcome", {
        speed: 75,
        loop: true
    })
        .type("Welcome to")
        .pause(1000)
        .type("<br> Drones.")
        .pause(3000)
        .go();
});