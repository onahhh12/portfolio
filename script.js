const toggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") ==="dark") {
  document.body.classList.add("dark");
  toggle.textContent = "🌞";
}
toggle.addEventListner("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.toggle("dark");
  toggle.textContent - isDark ? "🌞":
    "🌙";
  localStorage.setItem("theme", isDark ? });
