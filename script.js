const scriptURL = "https://script.google.com/macros/s/AKfycby7BYVCVi692HS4hPvetLOa9D_LbhoPtVR_dF7swE3ruyTOezpvZvls8ZRGWw30Cgo8rg/exec";

document.getElementById("formulario").addEventListener("submit", e =>{

e.preventDefault()

let formData = new FormData(e.target)

fetch(scriptURL,{
method:"POST",
body:formData
})
.then(res => alert("Formulario enviado correctamente"))
.catch(err => alert("Error al enviar"))

})