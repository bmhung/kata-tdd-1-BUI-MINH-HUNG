describe("StringCalculator sums all numbers in a string", function() {
	var calculator;

	beforeEach(function(){
		calculator = new StringCalculator();
	});

	it("should equal 0 with an empty string", function() {
		expect(calculator.Add("")).toEqual(0);
	});

	it("should equal 1 with string: 1", function() {
		expect(calculator.Add("1")).toEqual(1);
	});

	it("should equal 3 with string: 1,2", function() {
		expect(calculator.Add("1;2")).toEqual(3);
	});

	it("should sum all number in a string with unknow amount of numbers", function() {
		expect(calculator.Add("1;2;3;4;5")).toEqual(15);
	});

	it("should work with custom delimiter", function() {
		expect(calculator.Add("//,\n1,2,3,4,5")).toEqual(15);
	});

	it("should not work with negative number", function() {
		expect(calculator.Add("//,\n1,-2,3,4,5")).toThrowError('negatives not allowed: -2');
	});

	it("should not work with negative numbers", function() {
		expect(calculator.Add("//,\n1,-2,3,4,-5")).toThrow('negatives not allowed: -2, -5');
	});

	it("should ignore numbers bigger than 1000", function() {
		expect(calculator.Add("//,\n1,2,3,4,1002")).toEqual(10);
	});

	it("should not work many-char-delimiter", function() {
		expect(calculator.Add("//[,,]\n1,,-2,,3,,4,,-5")).toThrow('negatives not allowed: -2, -5');
	});
});