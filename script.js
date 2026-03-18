const scriptURL = "https://script.google.com/macros/s/AKfycbzNOQVYdrA965aW8pQwGaMElraVXDVeNPiGRsMJuxF-XH_GCZWWMuqMPL9PbMGyMnZkVg/exec";

document.getElementById("formulario").addEventListener("submit", function(e){
  e.preventDefault();

  let form = e.target;

  let insumos = [];
  document.querySelectorAll('input[name="insumos"]:checked').forEach(el=>{
    insumos.push(el.value);
  });

  // ⚠️ SIN IMAGEN (para que funcione perfecto primero)
  let url = scriptURL + "?" +
    "cierre=" + encodeURIComponent(form.cierre.value) +
    "&horario=" + encodeURIComponent(form.horario.value) +
    "&trabajador=" + encodeURIComponent(form.trabajador.value) +
    "&insumos=" + encodeURIComponent(insumos.join(", ")) +
    "&observaciones=" + encodeURIComponent(form.observaciones.value);

  fetch(url)
    .then(() => {
      alert("Formulario enviado correctamente");
      form.reset();
    })
    .catch(err => {
      console.error(err);
      alert("Error al enviar");
    });
});
