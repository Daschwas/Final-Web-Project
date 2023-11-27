// This method opens a specific tab by displaying only the chosen one
function openTab(tabName) {
    let i;
    let tabContent;

    // Get all elements with the class "tab-content"
    tabContent = document.getElementsByClassName("tab-content");

    // Hide all tab content elements
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Display the selected tab
    document.getElementById(tabName).style.display = "flex";
}

let designLinkEl = document.getElementById("Project1Link");
let progLinkEl = document.getElementById("Project2Link");
let musicLinkEl = document.getElementById("Project3Link");

// Event listeners to each project link, calling openTab for the relevant ProjectTab
designLinkEl.addEventListener("click", function(){openTab("Project1")}, false);
progLinkEl.addEventListener("click", function(){openTab("Project2")}, false);
musicLinkEl.addEventListener("click", function(){openTab("Project3")}, false);