
var nomDiv = function(id)
  {
    return document.getElementById(id);
  }
  
function Codificar(isCodificar) {
	

	var NumeroText  = nomDiv("Numero").value; //identifica el valor ingresado
	if (!/^-?\d+$/.test(NumeroText)) {	//determina si es un numero
		alert("No es un número entero");
		
	}
	var letra = Number(NumeroText);
	if (letra < 0 || letra >= 1000)		//busca que el numero ingresado este en el rango
	 {
		alert("Está fuera de rango");
		
	}
	if (isCodificar)
	{
		letra = (26 - letra) % 1000;	//realiza la operación para determinar el numero de posiciones 
	}
	var ElemenText = nomDiv("text");	//identifica el valor ingresado en text
	var ElemenText1 =nomDiv("text1");
  ElemenText1.value = Cod(ElemenText.value, letra); //identifica y evalua con el metodo Cod
	
}
function Cod(Entrada, letra) {
	var salida = "";
		for (var i = 0; i < Entrada.length; i++) 
		{
		var j = Entrada.charCodeAt(i);
		if      (j >= 65 && j <=  90) salida += String.fromCharCode((j - 65 + letra) % 26 + 65);  // operación 
											//para determinar si es mayúscula 
		else if (j >= 97 && j <= 122) salida += String.fromCharCode((j - 97 + letra) % 26 + 97);  // operación para 
											//determinar si es minúscula.. 
		else                          salida += Entrada.charAt(i);  // copia los valores 
	}
	return salida; 
 }
 
