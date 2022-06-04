alert("Bienvenidos al QUIz MS2022");

let user;
let categoria;
let responseFalse = 0;
let responseTrue = 0;

//QUESTIONS QUIz Geografia
const geoQuestion1="¿ Que país esta entre Perú y Bolivia ?"
const geoResponse1=2
const geoQuestion2="¿ En que país se encuentra el pico Aconcagua ?"
const geoResponse2=3
const geoQuestion3="¿ Qué río es el más caudaloso del Planeta ?"
const geoResponse3=1
let intGeoQuestion1;
let intGeoQuestion2;
let intGeoQuestion3;

//QUESTIONS QUIz Cultura Popular
const cpQuestion1="Completa la frase: 'Mas vale pajaro en mano que ... "
const cpResponse1=1
const cpQuestion2="Completa la frase: 'Pajaro que comio ... "
const cpResponse2=1
const cpQuestion3="Completa la frase: 'La pelota no ... "
const cpResponse3=1
let intCpQuestion1;
let intCpQuestion2;
let intCpQuestion3;

//Funcion de entrada para personalizar el nombre de quien va a jugar
function saludar(){
    user = prompt("Ingresa tu nombre para jugar:");
    while (user =="") {
        alert("No ingresaste nada\nPara poder jugar necesitas ingresar tu nombre o apodo")
        user = prompt("Ingresa tu nombre para jugar:");
    }
    alert("Hola " + user + "\nVamos a jugar!\nAntes de comenzar elijamos el tema del QUIz");
    return user;
}
//Funcion donde vamos a crear todas las categorias de los QUIz
function categorias(){
    categoria = parseInt(prompt("( 1 ) - Geografia\n( 2 ) - Cultura General"));
    while (isNaN(categoria) || categoria > 3) {
        alert("No existe esa categoria, elija nuevamente")
        categoria = parseInt(prompt("( 1 )-Geografia\n( 2 )-Cultura General"));
    }
    return categoria;
}
//Modulos de preguntas separdos con un IF de cada tema
function questions(){
    if (categoria ==1) {
        alert("Elegiste GEOGRAFIA a JUGAR!!!!!!\nRecorda ingresar el NUMERO correspondiente a la respuesta")
        intGeoQuestion1 = parseInt(prompt(geoQuestion1 + "\n\n1 - Buenos Aires\n2 - Ecuador\n3 - Brasil"));
            while (isNaN(intGeoQuestion1) || intGeoQuestion1 > 3) {
                alert("Error!\nCaracter Incorrecto / Numero Inválido\nRecuerde ingresar solo el NUMERO que contiene la respuesta")
                intGeoQuestion1 = parseInt(prompt(geoQuestion1 + "\n1 - Buenos Aires\n2 - Ecuador\n3 - Brasil"));
            }
        intGeoQuestion2 = parseInt(prompt(geoQuestion2 + "\n\n1 - Chile\n2 - Colombia\n3 - Argentina"));
            while (isNaN(intGeoQuestion2) || intGeoQuestion2 > 3) {
                alert("Error!\nCaracter Incorrecto/Numero Inválido\nRecuerde ingresar solo el NUMERO que contiene la respuesta")
                intGeoQuestion2 = parseInt(prompt(geoQuestion2 + "\n1 - Chile\n2 - Colombia\n3 - Argentina"));
            }
        intGeoQuestion3 = parseInt(prompt(geoQuestion3 + "\n\n1 - Río Amazonas\n2 - Río Nilo\n3 - Río Caudal Grande"));
            while (isNaN(intGeoQuestion3) || intGeoQuestion3 > 3) {
                alert("Error!\nCaracter Incorrecto/Numero Inválido\nRecuerde ingresar solo el NUMERO que contiene la respuesta")
                intGeoQuestion3 = parseInt(prompt(geoQuestion3 + "\n1 - Río Amazonas\n2 - Río Nilo\n3 - Río Caudal Grande"));
            }
            return intGeoQuestion1, intGeoQuestion2, intGeoQuestion3;
    }
    else if(categoria ==2){
        alert("Elegiste CULTURA POPULAR a JUGAR!!!!!!\nRecorda ingresar el NUMERO correspondiente a la respuesta")
        intCpQuestion1 = parseInt(prompt(cpQuestion1 + "\n\n1 - ...cien volando'\n2 - ...alcon colgando'\n3 - ...gato atrapado'"));
            while (isNaN(intCpQuestion1) || intCpQuestion1 > 3) {
                alert("Error!\nCaracter Incorrecto/Numero Inválido\nRecuerde ingresar solo el NUMERO que contiene la respuesta")
                intCpQuestion1 = parseInt(prompt(cpQuestion1 + "\n1 - ...cien volando'\n2 - ...alcon colgando'\n3 - ...gato atrapado'"));
            }
        intCpQuestion2 = parseInt(prompt(cpQuestion2 + "\n\n1 - ...voló'\n2 - ...se enamoro'\n3 - ...se fue corriendo'"));
            while (isNaN(intCpQuestion2) || intCpQuestion2 > 3) {
                alert("Error!\nCaracter Incorrecto/Numero Inválido\nRecuerde ingresar solo el NUMERO que contiene la respuesta")
                intCpQuestion2 = parseInt(prompt(cpQuestion2 + "\n1 - ...voló'\n2 - ...se enamoro'\n3 - ...se fue corriendo'"));
            }
        intCpQuestion3 = parseInt(prompt(cpQuestion3 + "\n\n1 - ...se mancha'\n2 - ...reboto'\n3 - ...no es coca papi'"));
            while (isNaN(intCpQuestion3) || intCpQuestion3 > 3) {
                alert("Error!\nCaracter Incorrecto/Numero Inválido\nRecuerde ingresar solo el NUMERO que contiene la respuesta")
                intCpQuestion3 = parseInt(prompt(cpQuestion3 + "\n1 - ...se mancha'\n2 - ...reboto'\n3 - ...no es coca papi'"));
            }
            return intCpQuestion1,intCpQuestion2,intCpQuestion3;
    }
}
//Funcion para sumar los resultados que va obteniendo en base a lo que responda
function sumar(a,b){
    if (a == b) {
        responseTrue ++;
    }
    else{
        responseFalse ++;
    }
}
//Funcion agregada para darle un toque, con titulos personalizados en base a los resultados obtenidos en las respuestas
function score(){
    switch (responseTrue) {
        case 3:
            titulo="SABELOTODO"
            break;
        case 2:
            titulo="CHAMULLERO DE RESPUESTAS"
            break;
        case 1:
            titulo="SEGUI PROGRAMANDO, LO TUYO NO SON LOS QUIz"
            break;
        default:
            titulo="MI PERRO RESPONDE MEJOR QUE VOS!!!"
            break;
    }
    resultado = alert(`Listo ${user}, terminaste el QUIz!!!\nTu resultado:\nRespuestas Correctas: ${responseTrue}\nRespuestas Incorrectas: ${responseFalse} JA JA JA\nNivel:----> ${titulo} <----`)
}
//Funcion para darle una revancha si le va mal en las respuestas
function restart(){
    if (responseTrue <=2) {
        repeat = prompt("¿ Calentito ?¿ Queres la revancha ?\n------------> Pone SI, si te animas\n------------> Pone NO, si tenes miedo");
        switch (repeat) {
            case "si":
                alert("Me gusta tu valentia!\nElijamos la categoria")
                categorias();
                questions();
                score();
                alert("HASTA LA PROXIMA!!!");
                break;
            case "SI":
                alert("Me gusta tu valentia!\nElijamos la categoria")
                categorias();
                questions();
                score();
                alert("HASTA LA PROXIMA!!!");
                break;    
            case "no":
                alert("UYYYY ALGUIEN TIENE MIEDOOOOOOOOOO JAJAJAJAJJAJA\nCHAU CHAU CHAUUUUUUUUUUUU");
                break;
            case "NO":
                alert("UYYYY ALGUIEN TIENE MIEDOOOOOOOOOO JAJAJAJAJJAJA\nCHAU CHAU CHAUUUUUUUUUUUU");
                break;
            default:
                alert("¿ Estas nervioso ? Pone una opcion valida\nUltima posibilidad, SI si te animas, NO si no te animas");
                repeat = prompt("¿ Calentito ?¿ Queres la revancha ?\n------------> Pone SI, si te animas\n------------> Pone NO, si tenes miedo");
                restart();
        }      
    } 
}

//Funcion para agrupar las funciones y que actuen con condiciones
function init(){
    saludar();
    categorias();
    questions();
    if (categoria ===1) {
        sumar(intGeoQuestion1,geoResponse1);
        sumar(intGeoQuestion2,geoResponse2);
        sumar(intGeoQuestion3,geoResponse3);   
    }
    else if (categoria ===2) {
        sumar(intCpQuestion1,cpResponse1);
        sumar(intCpQuestion2,cpResponse2);
        sumar(intCpQuestion3,cpResponse3);
    }

    score();
    if (responseTrue <=2) {
        restart();
    }
    else{
        alert("HASTA LA PROXIMA CAMPEON!!!!")
    }
}

init();
