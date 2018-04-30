document.getElementById('calculate-button').onclick = function () {

	// Get numbers inside the input boxes
	let elem1 = document.getElementById('elem-1');
	let elem2 = document.getElementById('elem-2');

	// Converting input values from string to float (decimal numbers)
	let val1 = parseFloat(elem1.value);
	let val2 = parseFloat(elem2.value); 

	// Chosen operation from radio group
	let choices = document.querySelector('input[name="operation"]');
	let choice = document.querySelector('input[name="operation"]:checked');
	let operation = choice.value; 
	
	// Element to display the result 
	let resultElement = document.getElementById('result');
	// Returns the result on resultElement
	let operationResult = getResult(val1, val2, operation);

	/** Changing commas to dots
		Arguments: two numbers */
	function commaToDot(val1, val2) {
		val1.replace(",", ".");
		val2.replace(",",".");
	}
	
	/** Returning result according to the operation selected. 
		Arguments: two numbers and one operation (to sum, subtract, multiply or divide)*/
	function getResult(val1, val2, operation) {
	if(operation === '+') {
		return val1 + val2;
	} else if(operation === '-') {
		return val1 - val2;
	} else if(operation === '*') {
		return val1 * val2;
	} else if(operation === '/') {
		return val1 / val2;
	}
	}
	// Setting the proper resultElement inner text if there isn't input numbers
		if (val1 !== val1) {
			resultElement.innerText = "Insira números válidos :)";
			document.getElementById("elem-1").focus();
		} else if(val2 !== val2) {
			resultElement.innerText = "Insira números válidos :)";
			document.getElementById("elem-2").focus();
		} else {
			resultElement.innerText = operationResult;
		}
}
