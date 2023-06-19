class EspecieAPI{
    async guardarEspecie(){
        const nombre= document.getElementById("nombre").value;
        const clasificacion=document.getElementById("clasificacion").value;
        const esperanza_vida=parseInt(document.getElementById("esperanza_vida").value);
        const peso_promedio=parseFloat(document.getElementById("peso_promedio").value);

        const datos={
            nombre:nombre,
            clasificacion:clasificacion,
            esperanza_vida:esperanza_vida,
            peso_promedio:peso_promedio
        };

        await fetch(

            "http://localhost:3001/crear_especie",
            {
            //metodo post es loq  espera el backend
                method:"POST",
                body:JSON.stringify(datos),
                headers:{
                    "Content-Type":"application/json"
                }
            }
        );


    }
async listarEspecie(){
let especies=await fetch(
    "http://localhost:3001/listar_especie"
)
especies=await especies.json();

const miTabla= document.getElementById("tabla_especies");
especies.forEach(
    (especie)=>{
        const fila = miTabla.insertRow();
        fila.insertCell().innerText=especie.id_especie;
        fila.insertCell().innerText=especie.nombre;
        fila.insertCell().innerText=especie.clasificacion;
        fila.insertCell().innerText=especie.esperanza_vida;
        fila.insertCell().innerText=especie.peso_promedio;

    }
);
}

}
//Convertir esta clase en un módulo
export default EspecieAPI;