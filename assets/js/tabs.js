function openTab(tabName) {
    let i;
    let tabContent;

    tabContent = document.getElementsByClassName("tab-content");

    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "flex";
}

let designLinkEl = document.getElementById("Project1Link");
let progLinkEl = document.getElementById("Project2Link");
let musicLinkEl = document.getElementById("Project3Link");

designLinkEl.addEventListener("click", function(){openTab("Project1")}, false);
progLinkEl.addEventListener("click", function(){openTab("Project2")}, false);
musicLinkEl.addEventListener("click", function(){openTab("Project3")}, false);