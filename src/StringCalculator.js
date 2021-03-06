var StringCalculator = function() {
	this.Add = function(numbersString) {
		if(numbersString === '') return 0;
		if(numbersString.length == 1) return parseInt(numbersString);

		//get delimiter in first line
		var firstLine = numbersString.substring(0, numbersString.indexOf('\n'));
		var delimiter;
		var delimiterMatch = /\/\/\[?([^\[\]]*)\]?/.exec(firstLine);
		if(delimiterMatch !== null) {
			delimiter = delimiterMatch[1];
		} else {
			delimiter = ';';
		}

		var numbersRegex = new RegExp('(?!.*\\n)(-?\\d('+delimiter+')?)*');
		
		var numbers = numbersRegex.exec(numbersString)[0].split(delimiter);

		var sum = 0;
		var negativeNumbers = [];
		for(var i=0; i < numbers.length; i++) { 
			var number = parseInt(numbers[i]);
			if(number < 0) negativeNumbers.push(number);
			if(number > 1000) continue;
			sum += number; 
		}

		if(negativeNumbers.length > 0) {
			throw new Error('negatives not allowed: ' + negativeNumbers.join(', '));
		}

		return sum;
	};
};