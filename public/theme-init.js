// Runs synchronously in <head> before paint.
// Always re-evaluates system preference fresh — no localStorage persistence,
// per spec: manual toggle choice does NOT persist across visits.
(function () {
  try {
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  } catch (e) {
    // matchMedia unsupported — default to light
  }
})();
