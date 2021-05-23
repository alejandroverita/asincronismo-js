//Instanciamos la funcionalidad XMLhttprequest para poder usarla en el proyecto
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// LA API  a la cual voy hacer peticion
let API = 'https://rickandmortyapi.com/api/character/'; 


function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    //abrir una llamado a una URL. Abrir una conexion por medio de GET
    xhttp.open('GET', url_api, true);

    xhttp.onreadystatechange = function(event) {
        //hay 5 estados
        if(xhttp.readyState===4){
            //evaluar si no dio algun tipo de error. 200 es todo OK
            if (xhttp.status === 200) {
                //primer valor es el error
                callback(null, JSON.parse(xhttp.responseText)); //En los callback, el primet parametro se pasa el
            }
            else {
                const error = new Error ('Error ' + url_api);
                return callback(error, null);
            }
        }
    }

    //enviar la solicitud
    xhttp.send(); 
}


//REALIZAR LLAMADOS A LA API CON CALLBACKS 


fetchData(API, function(error1, data1){
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2, data2){
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})