//Creación del botón
const $boton = document.getElementById('get');

//AJAX:

// $boton.addEventListener('click', ()=>{
//     let xhr;
//     if(window.XMLHttpRequest) xhr=new XMLHttpRequest();
//     else xhr=new ActiveXObject('Microsoft.XMLHttp');

//     xhr.open('GET','https://jsonplaceholder.typicode.com/users');

//     xhr.addEventListener('load', (data)=>{
//         console.log(data);
//         // console.log(data.target);
//         // console.log(data.target.response);
//         // console.log(typeof data.target.response);

//         const datosJson=JSON.parse(data.target.response);
//         console.log(datosJson);
//         // console.log(typeof datosJson);
//         const $lista=document.getElementById('lista');
//         for(const infoUsuario of datosJson){
//             const itemsLista=document.createElement('li');
//             itemsLista.textContent=`Usuario: ${infoUsuario.name} -- E-Mail: ${infoUsuario.email} -- Ciudad: ${infoUsuario.address.city} -- Geolocalización: (lat: ${infoUsuario.address.geo.lat}; long: ${infoUsuario.address.geo.lng})`;
//             $lista.appendChild(itemsLista);
//         }
//     })
//     xhr.send();
// })

//AXIOS
$boton.addEventListener('click', () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            // handle success
            console.log(response);
            const json = response.data;
            const $lista = document.getElementById('lista');
            json.forEach(infoUsuario  => {
                const itemLista=document.createElement('li');
                itemLista.textContent=`Usuario: ${infoUsuario.name} -- E-Mail: ${infoUsuario.email} -- Ciudad: ${infoUsuario.address.city} -- Geolocalización: (lat: ${infoUsuario.address.geo.lat}; long: ${infoUsuario.address.geo.lng})`;
                $lista.appendChild(itemLista);
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            alert(error);
        })
        .then(function () {
            // always executed
            alert('Gracias por utilizar Axios');
        });
})