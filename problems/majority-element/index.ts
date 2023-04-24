// https://leetcode.com/problems/majority-element
function majorityElement(nums: number[]):number {
    let candidate;
    let count = 0;
    for (let i = 0; i < nums.length;i++) {
        if (count === 0) {
            candidate = nums[i]
        }

        count = count + (candidate === nums[i] ? 1 : -1)
    };

    return candidate;
};
