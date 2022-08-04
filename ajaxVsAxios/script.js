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
{/* <script src="https://unpkg.com/axios/dist/axios.min.js"></script> */ }



$boton.addEventListener('click', () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            let json = response.data;
            const $lista = document.getElementById('lista');
            json.forEach(infoUsuario => {
                const itemsLista = document.createElement('li');
                itemsLista.textContent = `Usuario: ${infoUsuario.name} -- E-Mail: ${infoUsuario.email} -- Ciudad: ${infoUsuario.address.city} -- Geolocalización: (lat: ${infoUsuario.address.geo.lat}; long: ${infoUsuario.address.geo.lng})`;
                $lista.appendChild(itemsLista);
            })
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
        });
});