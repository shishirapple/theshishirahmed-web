// Runs synchronously in <head> before paint.
// Persists user's theme choice in localStorage.
// Falls back to system preference if no user choice exists.
(function () {
  try {
    var storedTheme = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  } catch (e) {
    // localStorage or matchMedia unsupported — default to light
  }
})();
