function datos(){
    var etiqueta = "";
    var parametros = location.search.substr(1).split("&");
    parametros.forEach(function (item) {
        campos = item.split("=");
        if(campos[0]!="Enviar"){
            switch(campos[0]){
                case "txtN": etiqueta = "Nombres"; break;
                case "txtAp": etiqueta = "Apellidos"; break;
                case "rdbs": etiqueta = "Sexo"; break;
                case "prog1": etiqueta = "Programa"; break;
                case "carrera": etiqueta = "Programa Académico"; break;
            }
            document.getElementById("parrafo").innerHTML+= etiqueta+":"+ campos[1]+"<br>";
 
        }
    });
    document.getElementById("parrafo").innerHTML+="<input type='button' value='Regresar' onClick='regresar()'>"
}
 
function regresar(){
    window.open("Formulario.html", "_self");
}