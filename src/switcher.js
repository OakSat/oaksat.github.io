  const toggleButton = document.getElementById("theme-toggle");
  console.log("Running.1..")

  function updateThemeButton() {
    const isDark = document.documentElement.classList.contains("dark");
    toggleButton.textContent = isDark ? "Light theme" : "Dark theme";
  }

  toggleButton.addEventListener("click", () => {

    document.documentElement.classList.toggle("dark");

    const isDark = document.documentElement.classList.contains("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    updateThemeButton();
  });
  console.log("Running..2.")

  updateThemeButton();