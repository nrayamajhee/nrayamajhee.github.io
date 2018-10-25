// "Moles hate bright colours!" was ripped off from libsdl's homepage. Sorry about that!

// Delay inorder to prevent css animation from light to dark theme while loading the website
let skipAnimation = 400;

// Local storage for storing theme preference
let myLocalStorage = localStorage;

let ul;
let wrap;
let auto;

function init() {
    ul = document.querySelector('nav');
    wrap = document.querySelector('page-content wrapper');
    auto = document.querySelector('#auto-theme');
    let darkTheme = myLocalStorage.getItem("Theme-Dark");
    let manualTheme = myLocalStorage.getItem("Theme-Manual");

    console.log(manualTheme + ' and ' + darkTheme);
    
    // If there's any value in local storage "Theme-Manual"
    if(manualTheme == null)
        autoTheme();

    // If there's any value in local storage "Theme-Dark"
    if (darkTheme!=null && darkTheme.length > 1 )
        setDarkTheme();
    
    // Delay before adding class "animate" to body
    setTimeout(function() {
        document.body.classList.add("animate");
    }, skipAnimation);

}

function toggleTheme()
{    
    if(document.body.classList.contains("dark-theme"))
        setLightTheme()
    else
        setDarkTheme()
}

function toggleMenu() {
    if(ul.classList.contains("shown")){
        ul.classList.remove("shown");
        wrap.classList.remove("blur");
    } else {
        ul.classList.add("shown");
        wrap.classList.add("blur");
    }
}

function setLightTheme() {
    document.body.classList.remove("dark-theme");
    myLocalStorage.removeItem("Theme-Dark");
}

function autoTheme() {
    // console.log("Automatically set ")
    let hours = (new Date()).getHours();
    if (hours > 7 && hours < 21) {
        setLightTheme();
    } else  {
        setDarkTheme();
    }
    if(auto.classList.contains("activated")) {
        auto.classList.remove("activated");
        myLocalStorage.setItem("Theme-Manual", "Doesn't like automatic!");
    } else {
        auto.classList.add("activated");
        myLocalStorage.removeItem("Theme-Manual");
    }
}

function setDarkTheme() {
    document.body.classList.add("dark-theme");
    myLocalStorage.setItem("Theme-Dark", "Hates bright colours!");
}

window.onload = init;
