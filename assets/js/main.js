var minas = hacerMatriz();	// var global minas que inicializa la funcion hacer matriz

function hacerMatriz(){ 		 // generamos la funcion hacer matriz
	var tabla = [];         	// iniciamos un array con nombre tabla 
	for(var i = 0; i < 8; i++){	// generamos un loop cuyo limite es el numero de columnas que tendra la tabla		        
	tabla[i] = [0,0,0,0,0,0,0,0];	// declaramos que por cada columna se trenda una fila cuyo valor inicia en 0		        
}
    return tabla; // regresamos la matriz con nombre tabla
}	


function crearTablero() {     // Creamos la funcion que visualisara el tablero
	for(var i = 0; i < 8; i++){ // realizamos un loop que nos dara el primer valor de nuestro id
	  for(var j = 0; j < 8; j++){	//realizamos un loop anidado que nos dara el 2 valor de nuetro id 		           
			  var div = document.createElement("div"); //en cada iteracion del loop se formara un div 
			   div.id = i + "" + j;			    //  a cada div le generaremos un id para poder manipularlo        
			   div.addEventListener("click",mostrarNumero, true);	// agregaremos un even listener para cada click en el div		            
			   tablerominas.appendChild(div); // agregamos el div a nuestro div llamado tablerominas
		 }
	}		    
			    
}

			
function mostrarNumero(e){      // declaramos la funcion que asignara el numero en cada elemento div
	var myid = this.id;		   // valor del id
	var auxstr=this.id.split("") //  el id se convierte en array	
	divObj = document.getElementById(myid);// aqui traemos el objeto div creado en el paso anterior con el valor de myid

    if(minas[parseInt(auxstr[0])][parseInt(auxstr[1])] == 0){ // generamos las condiciones si el elemneto esta vacio
			divObj.style.backgroundColor = "white";			//el objeto se tornara blanco		
			abrirAlrededor(parseInt(auxstr[0],10),parseInt(auxstr[1],10),minas);//y abrira los divs a su alrededor que no sean bombs
  }
	   
	else{  // si no esta vacio
        if(minas[parseInt(auxstr[0],10)][parseInt(auxstr[1],10)] != "*"){ // si el elmento dentro del div no es *
			document.getElementById(myid).innerHTML = "<p style='margin-top:15px;'>" + minas[parseInt(auxstr[0],10)][parseInt(auxstr[1],10)] + "</p>";
			divObj.style.backgroundColor = "white";
   }
		else{
				divObj.style.backgroundImage = "url(assets/image/bomba.jpg)";						
				abrirTablero(minas);
						alert("Perdiste =(");
			}
		}						
	}				
