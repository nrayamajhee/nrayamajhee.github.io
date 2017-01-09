function setTheme(theme) {
    const icon = document.querySelector("button#toggle-theme i");
    if (theme == "dark") {
        icon.innerHTML = "brightness_2";
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
    } else if (theme == "light") {
        icon.innerHTML = "brightness_low";
        document.body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
    } else {
        const hours = (new Date()).getHours();
        if (hours > 7 && hours < 19) {
            setTheme("light");
        } else {
            setTheme("dark");
        }
        icon.innerHTML = "brightness_auto";
        localStorage.setItem("theme", "auto");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.body.classList.add("animate");
    }, 400);

    const stored = localStorage.getItem("theme");
    if (stored) {
		console.log('stored', stored);
        setTheme(stored);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
    }
    document.querySelector("button#toggle-menu").addEventListener("click", (e) => {
        let el = document.querySelector("nav ul");
        el.classList.toggle("shown");
        if (el.classList.contains("shown")) {
            el.style.height = (el.children.length * 59.2) + 'px';
        } else {
            el.style.height = '59.2px';
        }
    });
    document.querySelector("button#toggle-theme").addEventListener("click", (e) => {
        const icon = document.querySelector("button#toggle-theme i");
        if (icon.innerHTML == "brightness_low") {
            setTheme("dark");
        } else if (icon.innerHTML == "brightness_auto") {
            setTheme("light");
        } else {
            setTheme("auto");
        }
    });
});
