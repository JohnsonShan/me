var makesquare = function (nums) {
    function bt(i) {
        if (i === n) return true;

        for (let j = 0; j < 4; j++) {
            if (sums[j] === target) continue;
            if (j > 0 && sums[j - 1] == sums[j]) continue;
            if (sums[j] + nums[i] > target) continue;

            sums[j] += nums[i];
            if (bt(i + 1)) return true;
            sums[j] -= nums[i];
        }
        return false;
    }

    const n = nums.length;
    if (!nums.length) return false;

    let sum = nums.reduce((sum, x) => sum + x);
    if (sum % 4 != 0) return false;

    nums.sort((a, b) => b - a);

    let sums = new Array(4).fill(0);
    let target = sum / 4;
    return bt(0);
};
