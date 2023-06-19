import EspecieAPI from "./EspecieAPI.js";


const miEspecie=new EspecieAPI();

const miBoton=document.getElementById("btnProcesar");
const formularioB=document.getElementById("Formulario");

miBoton.addEventListener('click', 
async (event)=>{
    event.preventDefault();
 //   miBoton.disabled=true;
    await miEspecie.guardarEspecie();
    formularioB.reset();
    document.getElementById('mensaje-exito').textContent = '¡La especie se ha guardado con éxito! Gracias';

    setTimeout(() => {
        window.location.href = 'crearEspecie.html'; 
      }, 3000);
}
);