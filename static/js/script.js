// Scroll doux depuis le bouton du hero
document.querySelectorAll("[data-scroll]").forEach(btn => {
  btn.addEventListener("click", e => {
    const target = btn.getAttribute("data-scroll");
    const el = document.querySelector(target);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

// Filtres catalogue
const filterButtons = document.querySelectorAll(".filters__btn");
const cards = document.querySelectorAll(".card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    filterButtons.forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    cards.forEach(card => {
      const type = card.getAttribute("data-type");
      const show = filter === "all" || filter === type;
      card.style.opacity = show ? "1" : "0";
      card.style.pointerEvents = show ? "auto" : "none";
      card.style.transform = show ? "" : "scale(0.98)";
    });
  });
});

// Newsletter (fake submit)
const newsletterForm = document.querySelector(".newsletter__form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", e => {
    e.preventDefault();
    const input = newsletterForm.querySelector("input[type='email']");
    if (!input.value) return;
    alert("Merci, on t’écrira seulement quand ça compte.");
    input.value = "";
  });
}
