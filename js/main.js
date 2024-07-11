const cliente = prompt("Ingrese su nombre para un mejor asesoramiento")

function saludarCliente(){
    alert("¡Bienvenido " + cliente + ", te guiaremos por nuestra tienda de suplementos deportivos!")
}

saludarCliente()

let option;
do{
    option=parseInt(prompt("Menú de opciones\n\n1) Ver todos nuestros suplementos deportivos\n2) Top mas comprados por nuestra comunidad\n3) Promociones/Combos\n\n Ingrese 0 para salir."));

    if(option === 1){
        let primerMensaje = "Suplementos deportivos:\n\nProteina Whey protein 3kg ($50.600)\n\nCreatina Mervick 300grs ($21.000)\n\nAminoácidos ramificados Ultra Tech x120 Caps ($16.400)\n\nNatural Nutrition Omega 3 Suplemento ($20.400)\n\nVitamina D3, Valcatil Complex D3 X 260 Grs ($28.900)\n\nBisglicinato De Magnesio un Sobre 60 Capsulas ($16.300)\n\nPre Workout Energy Mervick Lab Pre Entreno X 907gr (29.550)\n\nBcaa 1 Kg (14.250)";
    alert(primerMensaje);
    } else if (option === 2){
        let segundoMensaje = "Disfruta de los suplementos mas populares segun nuestra comunidad:\n\nProteina Whey protein 3kg ($50.600)\nCreatina Mervick 300grs ($21.000)\nAminoácidos ramificados o BCAAs Ultra Tech x120 Caps ($16.400)\nPre Workout Energy Mervick 907gr ($40.000)";
    alert(segundoMensaje);
    } else if (option === 3){
        let tercerMensaje = "Promociones:\n\nPromo n1: Whey Protein 3kg + Creatina Mervick 300grs ($45.000)\n\nPromo n2:Creatina Mervick 300grs + Pre Workout Energy Mervick 907gr ($40.000)\n\nPromo n3:Natural Nutrition Omega 3 Suplemento + Bcaa 1 Kg ($32.000)";
        alert(tercerMensaje);
    } else if (option === 0){
        alert("Gracias por elegirnos " +  cliente + " y recuerde mente sana cuerpo sano.\n ¡Que tenga un buen dia!")
    }
    else{
        alert("Porfavor ingrese una opcion valida para continuar.")
    }
} while (option !== 0 );
