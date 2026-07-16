document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Placeholder behavior: clicking "unlock" on a locked poem sends the
  // reader to the purchase page instead of doing anything else. Replace
  // this with a real checkout/auth check once a store is connected.
  document.querySelectorAll("[data-unlock]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "get-the-book.html";
    });
  });
});
