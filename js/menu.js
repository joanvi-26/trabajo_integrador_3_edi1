const boton = document.getElementById("botonMenu");
const menu = document.getElementById("menu");

boton.addEventListener("click", () => {
  menu.hidden = !menu.hidden;
  boton.setAttribute("aria-expanded", String(!menu.hidden));
});