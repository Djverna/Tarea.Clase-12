function saludo(saludar) {
    for (i = 0; i != 1; i < 1) 
    {
        if (saludar.length > 0) 
        {
            alert("Bienvenido " + saludar);
            i = 1;
        }
        else 
        {
            var saludar = prompt("Por favor de ingresar su nombre");
        }
    }
}

var nombre = prompt("Ingrese su nombre ");
saludo(nombre);

var titulo = document.getElementById("titulo");
titulo.style.color="green";
var segundotitulo = document.getElementById("segundotitulo");
segundotitulo.style.color="red";

