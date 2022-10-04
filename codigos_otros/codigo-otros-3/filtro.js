// Tenemos un li de productos

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
]

const li = document.getElementById("lista-de-productos")//se agrego get by ID 
const input = document.getElementById("input");//cambie nombre de variable y get by ID

for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre

  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)
  console.log("aqui voy");//señal de que aqui vamos bien 
  li.appendChild(d);
}

/*displayProductos(productos)*///comente esta parte considere que no funcionaba y solo estaba marcando error
const botonDeFiltro = document.getElementById("button");//se agrego get by id 

botonDeFiltro.onclick = function () {

  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = input.value;//cambie nombre de variable 
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);
  console.log(productosFiltrados.length);//señal de hasta aqui todo bien
  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")

    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre

    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);

    d.appendChild(ti)
    d.appendChild(imagen)

    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
  console.log("function")
}  