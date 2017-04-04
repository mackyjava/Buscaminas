  var madeTable = document.getElementById("tabla")
  madeTable.addEventListener("click",genera_tabla)
  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("body")[0];
  function genera_tabla(){
  // Crea un elemento <table> y un elemento <tbody>
  var tabla   = document.createElement("table");
      tabla.width = 100;
      tabla.heigth= 200;
    

  var tblBody = document.createElement("tbody");
 
  // Crea las celdas
  for (var i = 0; i < 4; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");

 
    for (var j = 0; j < 4; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("td");
      var btnCelda = document.createElement("button");
      celda.appendChild(btnCelda);
      hilera.appendChild(celda);
    }
 
    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }
 
  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");
}