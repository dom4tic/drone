
    function clickNav() {
        if (document.getElementById("mySidebar").style.width == '250px') {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("sidebarButton").classList.remove("bi-x");
            document.getElementById("sidebarButton").classList.add("bi-list");

        } else {
            document.getElementById("mySidebar").style.width = "250px";
            document.getElementById("sidebarButton").classList.remove("bi-list");
            document.getElementById("sidebarButton").classList.add("bi-x");
        }
    }
