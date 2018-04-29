function getTickets(){
	var adultTickets = document.getElementById("adultTickets").value;
	var childTickets = document.getElementById("childTickets").value;
	var seniorTickets = document.getElementById("seniorTickets").value;
	
	var totalPrice = ((adultTickets * 39.95) + (childTickets * 29.95) + (seniorTickets * 24.95)).toFixed(2);
	
	document.getElementById("totalPrice").innerHTML = "Total price: $" + totalPrice;
}

function purchaseTickets(){
	var adultTickets = document.getElementById("adultTickets").value;
	var childTickets = document.getElementById("childTickets").value;
	var seniorTickets = document.getElementById("seniorTickets").value;
	
	if(adultTickets == 0 && childTickets == 0 && seniorTickets == 0){
		alert("Please select the number tickets you would like to purchase.");
		return;
	}		
	
	var adultTicketsPrice  = adultTickets  * 39.95
	var childTicketsPrice  = childTickets  * 29.95
	var seniorTicketsPrice = seniorTickets * 24.95
	
	var totalPrice = (adultTicketsPrice + childTicketsPrice + seniorTicketsPrice).toFixed(2);
	$("#thankYouDiv").removeClass('hidden');
	
	if(adultTickets > 0){
		document.getElementById("adultTicketsPurchased").innerHTML = "x" + adultTickets + ": ";		
		document.getElementById("adultTicketsPrice").innerHTML = "$" + adultTicketsPrice.toFixed(2);
		$("#hideAdultTickets").removeClass('hidden');
	}
	if(childTickets > 0){
		document.getElementById("childTicketsPurchased").innerHTML = "x" + childTickets + ": ";		
		document.getElementById("childTicketsPrice").innerHTML = "$" + childTicketsPrice.toFixed(2);
		$("#hideChildTickets").removeClass('hidden');
	}
	if(seniorTickets > 0){
		document.getElementById("seniorTicketsPurchased").innerHTML = "x" + seniorTickets + ": ";		
		document.getElementById("seniorTicketsPrice")    .innerHTML = "$" + seniorTicketsPrice.toFixed(2);	
		$("#hideSeniorTickets").removeClass('hidden');
	}	
	
	$("#hideTotalPrice").removeClass('hidden');
	document.getElementById("totalPurchasedPrice").innerHTML = "$" + totalPrice;
	

	disableElement("adultTickets");
	disableElement("childTickets");
	disableElement("seniorTickets");
	disableElement("btnPurchase");
		
}

function disableElement(elementToDisable){
	var selectobject;
  	selectobject = document.getElementById(elementToDisable);
  	selectobject.disabled = true;
}