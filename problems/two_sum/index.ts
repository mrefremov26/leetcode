/**
 * There are solution for https://leetcode.com/problems/two-sum/
 * We can use hashmap for collect info about each position of array
 */

function twoSum(nums: number[], target: number) {
    const map = new Map()
       
       for (let i = 0; i < nums.length; i++) {
           const diff = target - nums[i]
           
           if (map.has(diff)) {
               return [i, map.get(diff)]
           }
           
           map.set(nums[i], i)
       }
   };