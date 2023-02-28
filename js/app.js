//Modo Oscuro
let toggle = document.getElementById("toggle");
let label = document.getElementById("label");
toggle.addEventListener("change", (event) => {
  let estado = event.target.checked;
  document.body.classList.toggle("oscuro");
  if (estado == true) {
    label.innerHTML = '<i class="fa-solid fa-sun"></i>';
    label.style.color="yellow";
  } else {
    label.innerHTML = '<i class="fa-solid fa-moon"></i>';
    label.style.color="rebeccapurple";
  }
})

//Datos Personales
document.getElementById('nombre').onmouseover = function(){
    document.getElementById("titulo").innerHTML = "Hola, Mi nombre es";
    document.getElementById("dato").innerHTML = "Maria Acosta";
}
document.getElementById('email').onmouseover = function(){
    document.getElementById("titulo").innerHTML = "Mi dirección de correo es";
    document.getElementById("dato").innerHTML = "maria.acosta@gmail.com";
}
document.getElementById('fecha_nac').onmouseover = function(){
    document.getElementById("titulo").innerHTML = "Mi cumpleaños es el";
    document.getElementById("dato").innerHTML = "28/06/1998";
}
document.getElementById('direccion').onmouseover = function(){
    document.getElementById("titulo").innerHTML = "Mi dirección es";
    document.getElementById("dato").innerHTML = "Av. 25 de Mayo 2600";
}
document.getElementById('web').onmouseover = function(){
    document.getElementById("titulo").innerHTML = "Mi página web es";
    document.getElementById("dato").innerHTML = "www.mariaacosta.com.ar";
}
document.getElementById('github').onmouseover = function(){
    document.getElementById("titulo").innerHTML = "Mi GitHub es";
    document.getElementById("dato").innerHTML = "github.com/mariaacosta";
}


//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
