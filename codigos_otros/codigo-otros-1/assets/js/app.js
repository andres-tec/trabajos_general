const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector(".name");  //aqui estaba con el operador para id y no para clases
const $b = document.querySelector('.blog');//
const $l = document.getElementById("location");

async function displayUser(username) {//desde que se usa await se tiene que declarar la funcion como una funcion asincrona
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);//aqui se esta mandado a traer la solicitud
  response.json().then((data) => {//aqui se recibe el dato en caso de ser positiva la respuesta este es leido como un archivo json
    console.log(data);
    $n.textContent = data.name;//estos elementos estaban señalados con llaves y bck sticks por lo que estaba incorrecto.
    $b.textContent = data.blog;
    $l.textContent = data.location;
  }).catch((error) => {
    console.error(error);
  })
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = ` Algo salió mal: ${err}`;//aqui se encontraba como n en lugar de $n
}

displayUser('stolinski').catch(handleError);