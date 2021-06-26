function kgToPound(unit){
	if(unit =="k"){
	var kg = document.getElementById('kg').value
	document.getElementById('pound').value = (kg* 2.2).toFixed(2);
	}else{
	var pound = document.getElementById('pound').value
	document.getElementById('kg').value =(pound/2.2).toFixed(2);
	}

}
function kmToMile(unit){
	if(unit == "k"){
	var km = document.getElementById('Kilometers').value
	document.getElementById('Miles').value = (km * 0.62137).toFixed(2);
	}else{
	var mile = document.getElementById('Miles').value
	document.getElementById('Kilometers').value = ( mile/0.62137).toFixed(2);
	}
}
function fahrenheitToCelsius(unit){
	
	if(unit=="f"){
		
		var fahrenheit= document.getElementById('Fahrenheit').value;
		document.getElementById('Celsius').value =	Math.round(fahrenheit-32*5/9);
	}else {
		var celsius= document.getElementById('Celsius').value;
		document.getElementById('Fahrenheit').value = Math.round(celsius*9/5+32);
	}

}

function clear(){
	document.getElementById('Fahrenheit').value="";
}