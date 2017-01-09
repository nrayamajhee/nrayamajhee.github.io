// "Moles hate bright colours!" was ripped off from libsdl's homepage. Sorry about that!

// Delay inorder to prevent css animation from light to dark theme while loading the website
var skipAnimation = 400;

// Local storage for storing theme preference
var myLocalStorage = localStorage;

function init() {
    rL = myLocalStorage.getItem("Theme");
    console.log(rL);
    
    // If there's any value in local storage "Theme"
    if(rL!=null && rL.length > 1 )
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

function setLightTheme() {
    document.body.classList.remove("dark-theme");
    myLocalStorage.removeItem("Theme");
}

function setDarkTheme() {
    document.body.classList.add("dark-theme");
    myLocalStorage.setItem("Theme", "Moles hate bright colours!");
}

window.onload = init;
