const runningSum = (nums) => {
	let array = [0];
	for (let i = 0; i < nums.length; i++) {
		array.push(nums[i] + array.at(-1));
	}
	array.shift();
	return array;
};
runningSum([1, 2, 3, 4]);
