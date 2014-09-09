
var nomDiv = function(id)
  {
    return document.getElementById(id);
  }
  
function Codificar(isCodificar) {
	

	var NumeroText  = nomDiv("Numero").value;
	if (!/^-?\d+$/.test(NumeroText)) {
		alert("No es un número entero");
		
	}
	var letra = Number(NumeroText);
	if (letra < 0 || letra >= 1000)
	 {
		alert("Está fuera de rango");
		
	}
	if (isCodificar)
	{
		letra = (26 - letra) % 1000;
	}
	var ElemenText = nomDiv("text");
	var ElemenText1 =nomDiv("text1");
  ElemenText1.value = Cod(ElemenText.value, letra);
	
}
function Cod(Entrada, letra) {
	var salida = "";
		for (var i = 0; i < Entrada.length; i++) 
		{
		var j = Entrada.charCodeAt(i);
		if      (j >= 65 && j <=  90) salida += String.fromCharCode((j - 65 + letra) % 26 + 65);  // Uppercase
		else if (j >= 97 && j <= 122) salida += String.fromCharCode((j - 97 + letra) % 26 + 97);  // Lowercase
		else                          salida += Entrada.charAt(i);  // Copy
	}
	return salida;
 }
 
