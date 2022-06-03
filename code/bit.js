var subsets = function(nums) {
	// The length of the power set is (2^nums.length). Create a dummy array of the same length which we can map over directly return.
    return new Array(Math.pow(2, nums.length)).fill(null)
    .map((item, index) => {

		// Convert the index number to it's binary representation (string), and fill it with leading zeroes. (so that the lengths of all the mapped strings are the same. This is required in the next map function.)
        let bin = index.toString(2);
        return new Array(nums.length - bin.length).fill("0").join("") + bin;
    })
    .map(binString => {
		// from the binary string, pick the number from num, corresponding to the index of 1s
        return nums.filter((num, index) => {
            return binString[index] === "1"
        });
    });
};