/**
 * Solution for https://leetcode.com/problems/length-of-last-word
 * Space complexity - O(1)
 * Time complexity  - O(1)
 */
function lengthOfLastWord(s: string): number {
    const arr = s.trimEnd().split(' ')
    return arr[arr.length-1].length
};
