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

            "http://localhost:3000/crear_especie",
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

}
//Convertir esta clase en un módulo
export default EspecieAPI;