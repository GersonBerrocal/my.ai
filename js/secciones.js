const barra_secciones = document.querySelector(".menu-section");
// dato_seccion se sobreescribira con los datos de la seccion;
let dato_seccion = "";

barra_secciones.addEventListener("click", cambio_seccion);

function cambio_seccion(event) {
  let target = event.target;
  if (target.nodeName.toLowerCase() == "span") {
    dato_seccion = target.getAttribute('data-section');
    cambio_seccion_panel(dato_seccion);
    cambio_seccion_item(target);
  }
}
function cambio_seccion_panel(dato_seccion) {
  let panel_antes = document.querySelector(".panel-active");
  panel_antes.addEventListener("animationend", termina_animacion_panel);
  panel_antes.style.animationName = "panel-desaparece";
}
function termina_animacion_panel() {
  this.classList.remove("panel-active");
  this.classList.add("is-hiden");
  this.style.animationName = "";
  this.removeEventListener("animationend", termina_animacion_panel);

  let panel_actual = document.querySelector(`.${dato_seccion}`);
  panel_actual.classList.add("panel-active");
  panel_actual.classList.remove("is-hiden");
}
function cambio_seccion_item(item_actual) {
  let item_anterior = document.querySelector("span[class*='section-active']");
  item_anterior.classList.remove("section-active");
  item_actual.classList.add("section-active");
}