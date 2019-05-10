function Validar(){
	var Nombre, Peso, Altura, Correo, IMC, Estado;
	Nombre = document.getElementById("Nombre").value;
	Peso = document.getElementById("Peso").value;
	Altura = document.getElementById("Altura").value;
	Correo = document.getElementById("Correo").value;

	if (Nombre === "" || Peso === "" || Altura === "" || Correo === "") {
		alert("Falta por ingresas datos ");
		return false;
	}else if(Nombre.length > 10){
		alert("El nombre es muy largo");
		return false;
	}else if(Peso.length > 3){
		alert("El Peso es muy largo");
		return false;
	}else if(Altura.length > 4){
		alert("El Altura muy extensa");
		return false;
	}else if(Correo.length > 50){
		alert("El Correo es muy extensa");
		return false;
	}else if(isNaN(Peso) || Peso > 635){
		alert("El peso registrado no es un numero o es muy elevado");
		return false;
	}else if(isNaN(Altura) || Altura > 2.20){
		alert("La Altura registrado no es un numero o es muy elevado");
		return false;
	}

	IMC = Peso/(Altura*Altura);
	if(IMC < 18.5){
		alert("!!! Baja de peso !!! : "+IMC);
	}else if(IMC > 18.5 && IMC < 24.9){
		alert("normal :"+IMC);
	}else if(IMC > 25 && IMC <29.9){
		alert("!!!CUIDADO!!!  sobrepeso  !!!CUIDADO!!! :"+IMC );
	}else if(IMC > 30){
		alert("!!!Hay que hacer de urgencias una Cirugía laparoscópica de banda gástrica ajustable para salvarle la vida !!! :"+IMC);
	}

}