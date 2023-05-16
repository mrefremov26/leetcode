/**
 * https://leetcode.com/problems/search-insert-position 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums[0] >= target) {
        return 0;
    }

    if (nums[nums.length - 1] < target) {
        return nums.length;
    }
    

    let resultIdx = null;

    let leftIndex = 0;
    let rightIndex = nums.length - 1;

    while (resultIdx === null) {
        if ((rightIndex - leftIndex) === 1) {
            return rightIndex;
        }
      
        let centerIdx = Math.round((rightIndex + leftIndex) / 2);
        const currentItem = nums[centerIdx];

        if (currentItem === target) {
            resultIdx = centerIdx;
        } else if (currentItem > target) {
            rightIndex = centerIdx
        } else {
            leftIndex = centerIdx  
        }

    }

    return resultIdx;
};
