let especializaciones=[];   //Declaramos el array de esoecuakuzaciones
let opcionAceptar=1;
let elegir_area= prompt("Que área deseas trabajar elegir: Front-End (1) o  Back-End (2).");

if (elegir_area==1) {
    // Elegiste Front-End
    alert("Tú has elegido Front-End");
    let que_aprender_01= prompt("Quieres aprender, elegir: React(1) o Vue(2)");
    if (que_aprender_01==1) {
        alert("Has legido aprender React");
    } else {
        alert("Has legido aprender Vue");
    }    
} else {
    // Elegiste Back-End
    alert("Tú has elegido Back-End");
    let que_aprender_02= prompt("Quieres aprender, elegir: C#(1) o Java(2)");
    if (que_aprender_02==1) {
        alert("Y quieres aprender C#");
    } else {
        alert("Y quieres aprender Java");
    }
}

let opcion3= prompt("Si deseas seguir especializándose en el área elegida(1) o desarrollarse para convertirse en Fullstack(2)");
if (opcion3==1) {
    alert("Escogiste Seguir Especializándote en el área elegida, Te FELICITO!!!!");
} else {
    alert("Deseas Desarrollarte para convertirte en FULLSTACK, EXCELENTE!!!!!!");
}

// 4 Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer. 
// Aquí, la persona puede responder N tecnologías, una a la vez. 
// Entonces, mientras continúe respondiendo **ok** a la pregunta: "¿Hay alguna otra tecnología que te gustaría aprender?", 
// sigue presentando el Prompt, para que complete el nombre de la tecnología en cuestión. Y, justo después, presenta un mensaje comentando algo sobre la tecnología ingresada.
 
while (opcionAceptar == 1) {
    let queTecnologia=prompt("Qué tecnologías le gustaría a la persona especializarse o conocer");
    especializaciones.push(queTecnologia);
    opcionAceptar = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (SI = 1 o NO = 2)");
    if (opcionAceptar == 2) {
        break
    } 
}

let mensaje = "";
especializaciones.forEach((elemento, indice) => {
    mensaje += `${indice + 1}- ${elemento}\n`;
});
    alert(mensaje);
