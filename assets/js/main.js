var minas = hacerMatriz();	// var global minas que inicializa la funcion hacer matriz

			function hacerizaMatriz(){ 		 // generamos la funcion hacer matriz
				var tabla = [];         	// iniciamos un array con nombre tabla 
				for(var i = 0; i < 8; i++){	// generamos un loop cuyo limite es el numero de columnas que tendra la tabla		        
			        tabla[i] = [0,0,0,0,0,0,0,0];	// declaramos que por cada columna se trenda una fila cuyo valor inicia en 0		        
			    }
			    return tabla; // regresamos la matriz con nombre tabla
			}		
