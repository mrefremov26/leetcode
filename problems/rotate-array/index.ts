/**
 https://leetcode.com/problems/rotate-array
 */
function rotate(nums: number[], k: number): void {
    if (k === nums.length) {
        return;
    };

    let offset =  k;

    if (k > nums.length) {
        offset = k % nums.length;
    } 

    const newArr = nums.slice(-offset);

    nums.splice(-offset);

    nums.unshift(...newArr)

};
