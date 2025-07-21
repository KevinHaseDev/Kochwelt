const basisPortionen = 4;

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("calculate").addEventListener("click", () => {
    const neuePortionen = parseInt(document.getElementById("amount").value);

    if (!neuePortionen || neuePortionen < 1) return;

    const zutaten = document.querySelectorAll("#ingredients tr");

    zutaten.forEach(tr => {
      const basisMenge = parseFloat(tr.dataset.base);
      const mengeElement = tr.querySelector(".quantity");

      // Wenn keine Menge angegeben ist
      if (!mengeElement || isNaN(basisMenge) || basisMenge === 0) return;

      const neueMenge = (basisMenge * neuePortionen / basisPortionen).toFixed(1);
      mengeElement.textContent = neueMenge;
    });
  });
});
/* Burger-Menü */

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const nav = document.querySelector("nav.links");

  if (burger && nav) {
    // Öffnen/Schließen per Burger-Klick
    burger.addEventListener("click", (e) => {
      e.stopPropagation(); // Verhindert das sofortige Schließen
      nav.classList.toggle("open");

      // Aria-Attribut für Barrierefreiheit
      const expanded = nav.classList.contains("open");
      burger.setAttribute("aria-expanded", expanded);
    });

    // Klick im Menü verhindert Schließen
    nav.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    // Klick außerhalb schließt Menü
    document.addEventListener("click", () => {
      if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  }
});