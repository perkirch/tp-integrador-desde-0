var valorTicket=20000

const capturaCantidad = document.getElementById("cantidad")
console.log(capturaCantidad)
capturaCantidad.value
console.log(capturaCantidad.value)

const capturaTotal=document.getElementById("total")
console.log(capturaTotal)
capturaTotal.textContent
console.log(capturaTotal.textContent)



// const selectVitalicio = document.getElementById("vitalicio").value
// console.log(selectVitalicio)
// const selectSocio = document.getElementById("socio").value
// console.log(selectSocio)
// const selectNoSocio = document.getElementById("no_socio").value
// console.log(selectNoSocio) 

const categoriaElegida=document.getElementById("categoria").value
console.log(document.getElementById("categoria").value)

function resumenForm(){
    
console.log("Funciona el botón")
console.log(capturaCantidad.value)
console.log(capturaTotal.textContent)

// if (categoriaElegida == "Seleccione una opción") {
//    alert("Seleccione una opción")
  
//   }
if (categoriaElegida == "vitalicio") {
        capturaTotal.textContent = (capturaCantidad.value *valorTicket) - ((capturaCantidad.value * valorTicket) * 80 / 100)
      
      }

    else if (categoriaElegida == "socio") {
        capturaTotal.textContent = (capturaCantidad.value *valorTicket) - ((capturaCantidad.value * valorTicket) * 50 / 100)
    }
    else {
        capturaTotal.textContent = (capturaCantidad.value * 20000) - ((capturaCantidad.value * valorTicket) * 15 / 100)
    }

}


// (capturaCantidad.value * 20000 *valorTicket *0.85) 
// capturaTotal.textContent = (capturaCantidad.value * 20000) - ((capturaCantidad.value * 20000) * 15 / 100)

// console.log(document.getElementById("titulo"))
// console.log(document.getElementById("titulo").textContent)


