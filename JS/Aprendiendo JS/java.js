document.write("<h1 id='color_letra'> Hola estoy aprendiendo java </h1>")

var dividendo = prompt("hola coloque un numero dividendo","10");
var divisor = prompt("hola coloque un numero divisor","2")
var colo = prompt("hola elija un color por nombre por css\n ejemplo; blue, purple, etc")

dividendo = parseInt(dividendo);
divisor = parseInt(divisor);

total_divi = dividendo/divisor;
total_modulo = dividendo % divisor;

document.write("la divisione ente los dos es " + total_divi + "y su modulo es " + total_modulo)
document.write("ademas escogiste" + colo + "lo cual cambia el color del h1")

document.getElementById('color_letra').style.color = colo;
