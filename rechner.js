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
/* Burger-menu */


document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const nav = document.querySelector("nav.links");

    burger.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  });