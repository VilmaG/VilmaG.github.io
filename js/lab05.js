"use strict";

function extraerDatos(){
    //separar nombre y apellidos
    let fullname = document.getElementById("fullname").value;
    let arr = fullname.split(" ");
    document.getElementById("apellidop").value=arr[0];
    document.getElementById("apellidom").value=arr[1];
    document.getElementById("nombre").value=arr[2];

    //mes en letras
    let date = new Date(document.getElementById("fecha").value); 
    let month = date.toLocaleString('es', { month: 'long' });
    document.getElementById("mes").value=month;
    
    //longitud del apellido
    let tamaño = arr[0].length + arr[1].length;
    document.getElementById("longitud").value =tamaño;
   
    //cacular edad
    let fecha_Actual = new Date();
    let diff = fecha_Actual-date; 
    let age = Math.floor(diff/31557600000); // Divide por 1000*60*60*24*365.25
    document.getElementById("edad").value=age;
}

    let btnExtraer = document.getElementById("extraer");
    btnExtraer.onclick = extraerDatos;

    
