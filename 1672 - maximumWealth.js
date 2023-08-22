const maximumWealth = (accounts) => {
	let totalWealth = [];
	for (i = 0; i < accounts.length; i++) {
		totalWealth[i] = accounts[i].reduce(
			(accumulator, currentValue) => accumulator + currentValue
		);
	}
	return Math.max(...totalWealth);
};

maximumWealth([
	[1, 2],
	[2, 3],
	[3, 4],
]);
