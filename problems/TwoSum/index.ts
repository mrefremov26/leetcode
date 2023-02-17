/**
 * There are solution for https://leetcode.com/problems/two-sum/
 */

function twoSum(nums: number[], target: number) {
    const map = new Map()
       
       for (let i = 0; i < nums.length; i++) {
           let diff = target - nums[i]
           
           if (map.has(diff)) {
               return [i, map.get(diff)]
           }
           
           map.set(nums[i], i)
       }
   };