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

    $(".more-button").click(function () {
        console.log(this.className);
        if (this.className.includes('plus')) {
            console.log('minus');
            $(this).html('<img class="plus-button-icon" src="css/img/minus.png" alt="plus">Learn less');
            $(this).removeClass('plus');
            $(this).addClass('minus');

        } else if (this.className.includes('minus')) {
            console.log('plus');
            $(this).html('<img class="plus-button-icon" src="css/img/plus.png" alt="plus">Learn more');
            $(this).removeClass('minus');
            $(this).addClass('plus');
        }
    });

    $('body').scroll( function(){
        $('#home').each( function(i){
            var top_of_object = $(this).offset().top + $(this).outerHeight();
            var top_of_window = $(window).scrollTop();

            if (top_of_window >= top_of_object) {
                $("#toTop").show(500);
            } else {
                $("#toTop").hide(500);
            }
        });
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