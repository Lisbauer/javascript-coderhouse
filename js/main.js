
let cuestionario = '2013';
for (let i=0; i < 3; i++){
    let respuestaUsuario = prompt('Pregunta: en qué año salio el campeon Jinx de League of Legends');
    if (cuestionario === respuestaUsuario){
        alert('Correcto! eres un verdadero fan de LOL!');
        break;
    }
    else{
        alert('Te quedan ' + (2-i) + ' intentos');
    }
    if (i == 2){
        alert ('Ya no te quedan intentos! No eres un verdadero fan de LOL!');
    }
}