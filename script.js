var menuIcon=document.querySelector(".menuicon");
var sidebar=document.querySelector(".sidebar");
var shortcutlink=document.querySelector(".shortcutlink");
var subscribed=document.querySelector(".subscribed");
var container=document.querySelector(".container");
 
var profmenu = document.querySelector(".profmenu");


menuIcon.onclick= function(){
    shortcutlink.classList.toggle("smallsidebar");
    sidebar.classList.toggle("smallsidebar");
    subscribed.classList.toggle("vanish");
    container.classList.toggle("largecontainer");
}

function profMenuToggle(){
    profmenu.classList.toggle("profmenuheight");
}

