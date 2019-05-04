function copyAnio() {
  let anio = new Date().getFullYear();
  document.getElementById("copyanio").innerHTML = anio;
}


function fechahora() {
  let datofecha = new Date();
  let dia, hora,minutos,valminut;
  let arrdia = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]; // defino la array dia con los días de la semana
  hora = datofecha.getHours();
  minutos = datofecha.getMinutes();
  if (minutos<=9) {
    valminut = '0' + minutos.toString();
    
  } else {
    valminut = minutos;
  }
  document.getElementById("fechahora").innerHTML = "RESULTADOS: Hoy es: " + arrdia[datofecha.getDay()] + ". La hora actual es: " + hora + ':' + valminut;
}


function voltear() {
  let cadnum = prompt("Introduce un número:", "introduce solo números"); // Solicitamos el número
  if (isNaN(cadnum)) {
    alert(cadnum + " No es un número");
    voltear;
  } else {
    let arrnum = cadnum.split(""); // convierte cadnum en arry
    let revnum = arrnum.reverse(); // damos la vuelta al array
    alert("Número volteado: " + revnum.join("")); // muestra el resultado en pantalla
  }
}