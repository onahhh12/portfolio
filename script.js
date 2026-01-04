const toggleTheme = document.getElementById("toggleTheme");
const body = document.body;
const avatar = document.getElementById("avatar");

// Toggle dark mode and avatar
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  
  toggle.textContent = 

document.body.classList.contains("dark") ? "🌞" : "🌙";
});
