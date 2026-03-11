const scriptURL = "https://script.google.com/macros/s/AKfycbyXaXcRdcLklgIaf1y_BaBvEORlNVc5uED0063VUN_sBj0zzjNTBOCLq_kLJsqx8hArGg/exec";

document.getElementById("formulario").addEventListener("submit", async function(e){

e.preventDefault()

let form = e.target
let formData = new FormData(form)

let file = document.getElementById("foto").files[0]

if(file){

let reader = new FileReader()

reader.onload = async function(){

formData.append("foto", reader.result)

await fetch(scriptURL,{
method:"POST",
body:formData
})

alert("Formulario enviado correctamente")
form.reset()

}

reader.readAsDataURL(file)

}else{

await fetch(scriptURL,{
method:"POST",
body:formData
})

alert("Formulario enviado correctamente")
form.reset()

}

})