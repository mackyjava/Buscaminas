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
   var auxstr=this.id.split(""); //  el id se convierte en array	
   var myid = auxstr[0] + auxstr[1]; //se generan los valores del id 
	divObj = document.getElementById(myid);// a traemos el objeto div creado en el paso anterior con el valor de myid
	

    if(minas[parseInt(auxstr[0],10)][parseInt(auxstr[1],10)] == 0){ // generamos las condiciones si el elemneto esta vacio
			divObj.style.backgroundColor = "white";			//el fondo se tornara blanco		
			abrirAlrededor(parseInt(auxstr[0],10),parseInt(auxstr[1],10),minas);//y abrira los divs a su alrededor que no sean bombs
  }
	   
	else{  // si no esta vacio
        if(minas[parseInt(auxstr[0],10)][parseInt(auxstr[1],10)] != "*"){ // si el elmento dentro del div no es *
			document.getElementById(myid).innerHTML = "<p style='margin-top:15px;'>" + minas[parseInt(auxstr[0],10)][parseInt(auxstr[1],10)] + "</p>"; // el objeto tomara un valor
			divObj.style.backgroundColor = "white";//el fondo se hara blanco
   }
		else{                            // si el valor en el div es *
			divObj.style.backgroundImage = "url(assets/image/bomba.jpg)";	//el fondo sera una bomba					
			abrirTablero(minas);        // declara funcion para buscar las demas bombas y mostrarlas en tablero
			alert("Perdiste =(");       // alerta con perdiste :(
			}
		}						
	}				
function bombasAlrededor(tablero){
		for(var i = 0; i < 8; i++){
	       for(var j = 0; j < 8; j++){			           
			   if(tablero[i][j] == "*"){
			        if(i == 0 && j == 0){
			            	colocaNumeroBombas(i, j, i + 1, j + 1,tablero);
			        }
			         else if (i == 0 && (j > 0 && j < 7)) {
			           		colocaNumeroBombas(i, j - 1, i + 1, j + 1,tablero);
			         }
			         else if(i == 0 && j == 7){
			           		colocaNumeroBombas(i, j - 1, i + 1, j,tablero);
			         }
			         else if(j == 7 && (i > 0 && i < 7)){
			           		colocaNumeroBombas(i - 1, j - 1, i + 1, j,tablero);
			           	}
			           	else if(i == 7 && j == 7){
			           		colocaNumeroBombas(i - 1, j - 1, i, j,tablero);
			           	}
			           	else if(i == 7 && (j > 0 && j < 7)){
			           			colocaNumeroBombas(i - 1, j - 1, i, j + 1,tablero);
			           	}
			           	else if(i == 7 && j == 0){
			           			colocaNumeroBombas(i - 1, j, i, j + 1,tablero);
			           	}
			           	else if(j == 0 && (i > 0 && i < 7)){
			           			colocaNumeroBombas(i - 1, j, i + 1, j + 1,tablero);
			           	}else{
			           			colocaNumeroBombas(i - 1, j - 1, i + 1, j + 1,tablero);
		     }
	     }
      }
   }
}

function colocaNumeroBombas(vari,varj,fini,finj,tablero){
		for(var i = vari; i <= fini; i++){
		   for(var j = varj; j <= finj; j++){			           
			       if(tablero[i][j] != "*"){
			        tablero[i][j] = (parseInt(tablero[i][j])+1);		           		
			 }
	    }
	}
}

function generarBombas(tablero){ // funcion que genera en que lugar crear las bombas
	var fil = 0; //valor de fila empiza en cero
	var col = 0; // valor de columna comienza en cero

		fil = Math.floor((Math.random()*7)+0); //se le asigna a fila un numero random 
		col = Math.floor((Math.random()*7)+0); // se le asign a acolumna un numero random
	   

	for(var i = 0; i < 8; i++){ // se genera un loop que recorre la tabla 
		while (tablero[fil][col] == "*"){ // cunado encuentra el valor * 
			fil = Math.floor((Math.random()*7)+0);//genera valores nuevos 
			col = Math.floor((Math.random()*7)+0);// genera valores nuevos y coloca otra bomba hasta finalizar el loop
	    }
		 tablero[fil][col] = "*"; 	//al finalizar el ciclo se genera la primera bomba y se repite el ciclo
	 }
}

function abrirCeros(vari,varj,fini,finj,cori,corj,tablero){
		for(var i = vari; i <= fini; i++){
		   for(var j = varj; j <= finj; j++){		
			   var myid = i+""+j;
			   var objDiv =  document.getElementById(myid)	           
			    if(objDiv.textContent == ""){			           		
			           if(tablero[i][j] == 0){			           			
			           	 if(i == cori && j == corj){			           				
			           			objDiv.textContent = ""	; 
			           			objDiv.style.backgroundColor = "white";	          				
			           	}else{
			           		if(objDiv.style.backgroundColor != "white"){
			           				abrirAlrededor(i, j,tablero);
			           			}			           				
			                  }

			           	     }else{
			           			if(tablero[i][j] != "*"){
			           				document.getElementById(myid).innerHTML = "<p style='margin-top:15px;'>" + tablero[i][j] + "</p>"; 
			           				objDiv.style.backgroundColor = "white";	
			           			}
			           		}			           			           		
			           }			           
			        }
			    }
			}

function abrirAlrededor(xi,xj,tablero){
		if(xi == 0 && xj == 0){
			 abrirCeros(xi, xj, xi + 1, xj + 1, xi, xj,tablero);
		}
		else if(xi == 0 && (xj > 0 && xj < 7)){
		     abrirCeros(xi, xj - 1, xi + 1, xj + 1, xi, xj,tablero);
				}
		else if(xi == 0 && xj == 7){
			abrirCeros(xi, xj - 1, xi + 1, xj, xi, xj,tablero);
		}
		else if(xj == 7 && (xi > 0 && xi < 7)){
				abrirCeros(xi - 1, xj - 1, xi + 1, xj, xi, xj,tablero);
		}
		else if(xi == 7 && xj == 7){
				abrirCeros(xi - 1, xj - 1, xi, xj, xi, xj,tablero);
		}
		else if(xi == 7 && (xj > 0 && xj < 7)){
					abrirCeros(xi - 1, xj - 1, xi, xj + 1, xi, xj,tablero);
	    }
		else if(xi == 7 && xj == 0){
			abrirCeros(xi - 1, xj, xi, xj + 1, xi, xj,tablero);
		}
	    else if(xj == 0 && (xi > 0 && xi < 7)){
				abrirCeros(xi - 1, xj, xi + 1, xj + 1, xi, xj,tablero);
		}
	    else{
				abrirCeros(xi - 1, xj - 1, xi + 1, xj + 1, xi, xj,tablero);
		}
	} 
        
   var contador =0;
function abrirTablero(tablero){
		for(var i = 0; i < 8; i++){
	       for(var j = 0; j < 8; j++){	
			   var myid = i+""+j;
			   var objDiv =  document.getElementById(myid);		           
			     if(tablero[i][j] == "*"){			        		
			    objDiv.style.backgroundImage ="url(assets/image/bomba.jpg)";
				  contador++;
		   }
        }
   }
}	

function cargarTablero(){
		crearTablero();
		generarBombas(minas);
		bombasAlrededor(minas);
	}