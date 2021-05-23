//Instanciamos la funcionalidad XMLhttprequest para poder usarla en el proyecto
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


const fetchData = (url_api) => {

    return new Promise((resolve, reject) => {

        const xhttp = new XMLHttpRequest();
        //abrir una llamado a una URL. Abrir una conexion por medio de GET
        xhttp.open('GET', url_api, true);
    
        xhttp.onreadystatechange = (() => {
            //hay 5 estados
            if(xhttp.readyState===4){

                (xhttp.status === 200)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('Error ', url_api));
            }
        });
    
        //enviar la solicitud
        xhttp.send(); 
    });
}

module.exports = fetchData; 