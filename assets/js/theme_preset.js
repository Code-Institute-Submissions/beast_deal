const currentThemeSetting = localStorage.getItem("theme");
if (currentThemeSetting === 'dark') document.querySelector("html").setAttribute("data-theme", currentThemeSetting);
