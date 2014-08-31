
var numero = prompt("Digite el número uno: ", 0);
var a = 0;
	
for(var i=1;i<=numero;i++)
{
    	if(numero%i==0)
    		a++;
}

if(a==2)
{
    alert("El número "+ numero +" es primo");

}else{
    
    alert("El número "+ numero +" no es primo"); 
}

if (numero% 2== 0)
{
	alert("El número "+  numero + " es par")
}
else {
		 alert("El número "+ numero +" es impar")
	}


		