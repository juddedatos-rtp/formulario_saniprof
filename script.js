const scriptURL = "https://script.google.com/macros/s/AKfycbzNOQVYdrA965aW8pQwGaMElraVXDVeNPiGRsMJuxF-XH_GCZWWMuqMPL9PbMGyMnZkVg/exec";

document.getElementById("formulario").addEventListener("submit", function(e){
  e.preventDefault();

  let form = e.target;

  let insumos = [];
  document.querySelectorAll('input[name="insumos"]:checked').forEach(el=>{
    insumos.push(el.value);
  });

  let file = document.getElementById("foto").files[0];

  if(file){
    let reader = new FileReader();
    reader.onload = function(){
      enviar(form, insumos, reader.result);
    };
    reader.readAsDataURL(file);
  } else {
    enviar(form, insumos, "");
  }
});

function enviar(form, insumos, foto){

  const datos = new URLSearchParams();

  datos.append("cierre", form.cierre.value);
  datos.append("horario", form.horario.value);
  datos.append("trabajador", form.trabajador.value);
  datos.append("insumos", insumos.join(", "));
  datos.append("observaciones", form.observaciones.value);
  datos.append("foto", foto);

  fetch(scriptURL, {
    method: "POST",
    body: datos,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });

  alert("Formulario enviado correctamente");
  form.reset();
}
