const fizzBuzz = (n) => {
	const arr = [];
	for (let i = 1; i <= n; i++) {
		let string = "";
		if (i % 3 === 0) string += "Fizz";
		if (i % 5 === 0) string += "Buzz";
		if (string === "") string += i;
		arr.push(string.toString());
		console.log(arr);
	}
	return arr;
};

fizzBuzz(20);
