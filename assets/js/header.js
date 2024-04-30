const themeButtons = document.getElementsByClassName("themeButton");
const menuButton = document.getElementById("menuButton");


for(let i = 0;i < themeButtons.length; i++)
{
  const themeButton = themeButtons[i]
  themeButton.addEventListener("click", () => {
    const currentThemeSetting = localStorage.getItem("theme") ?? "light";
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.querySelector("html").setAttribute("data-theme", newTheme);
  });
}

menuButton.addEventListener("click", function () {
  const mobileNavigation = document.getElementById("mobileNavigation");
  const isClosed = mobileNavigation.classList.contains("hidden");
  if (isClosed) {
    mobileNavigation.classList.remove("hidden");
    this.classList.add("menu_closed");
  } else {
    mobileNavigation.classList.add("hidden");
    this.classList.remove("menu_closed");
  }
});
