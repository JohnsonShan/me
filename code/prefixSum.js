var subarraySum = function (nums, k) {
    // start with 0:1 to consider empty array
    // eg nums = [1,1,1], k = 3 => 1,1,1 is valid subarray
    let prefixMap = { 0: 1 };

    let sum = 0;
    let count = 0;

    for (const num of nums) {
        sum += num;

        if (sum - k in prefixMap) {
            count += prefixMap[sum - k];
        }

        // store sums in prefix map, then we'll check how many
        // prefix exists that could be  extracted from current sum to
        // achive k
        if (sum in prefixMap) {
            prefixMap[sum] = prefixMap[sum] + 1;
        } else {
            prefixMap[sum] = 1;
        }
    }
    return count;
};