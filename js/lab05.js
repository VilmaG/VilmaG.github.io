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
    let age = Math.floor(diff/31557600000)+" años"; // Divide por 1000*60*60*24*365.25
    document.getElementById("edad").value=age;
}

    let btnExtraer = document.getElementById("extraer");
    btnExtraer.onclick = extraerDatos;
    
    let contador =0;
    function cambiar_color() {
        let color1 = document.querySelectorAll(".azul");
        let color2 = document.querySelectorAll(".orange");
        if(contador%2==0){
        color1.forEach(element => {
            element.style.backgroundColor="chocolate";
        });

        color2.forEach(element => {
            element.style.backgroundColor="rgb(46, 58, 163)";
             
        });
        }else{
            color1.forEach(element => {
                element.style.backgroundColor="rgb(46, 58, 163)";   
            });

            color2.forEach(element => {
                element.style.backgroundColor="chocolate";
                 
            });
        }
        contador +=1; 
    }

    
    let btnColorear = document.getElementById("colorear");
    btnColorear.onclick = cambiar_color;
    

   

    
       