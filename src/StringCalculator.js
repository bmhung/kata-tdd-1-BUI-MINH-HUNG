var StringCalculator = function() {
	this.Add = function(numbersString) {
		if(numbersString === "") return 0;
		
		var numbers = numbersString.split('\n');

		var sum = 0;
		for(var i=0; i < numbers.length; i++) { 
			sum += parseInt(numbers[i]); 
		}
		return sum;
	};
};