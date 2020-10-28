//console.log("funcionando")
let respuesta = document.getElementById('respuesta')
let formulario = document.getElementById('formulario')

/* formulario.addEventListener('submit', function(e){
    console.log("click!")
    e.preventDefault()///comentar esto para verificar 
    let datos = new FormData(formulario)
    console.log(datos)
    console.log(datos.get('user'))
    console.log(datos.get('pass'))
    
    fetch('post.php',{
		auten
        method: 'POST',
        body: datos
    })

    .then( res => res.json())
    .then( data => {
        console.log(data)
        if(data === "error"){
            respuesta.innerHTML = `
            <div class="alert alert-danger" role="alert">
                ALERTA!! LOS CAMPOS NO DEBEN ESTAR VACIOS
            </div>
           `
        }else{
           respuesta.innerHTML =  `
           <div class="alert alert-primary" role="alert">
               ${data}
           </div>
       `  
        }
    })
}) */

formulario.addEventListener('submit', async function(e){
    console.log("click!")
    e.preventDefault()///comentar esto para verificar   
let username = '';
let password = ''; 
let url = `` 
let authString = `${username}:${password}`
let headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(authString))
await fetch(url,{method: 'GET', headers: headers})
    .then(function (response) {
        let data = response.body;
        console.log(data)
        console.warn(typeof(data))
        //return response
    });
});

/* let headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa('admin:seralf2019'));

fetch(url, { method: 'GET', mode: 'cors', headers })
    .then(function (response) {
        console.table(response)
        return response
    });
}); */





