/**
 * Solution for https://leetcode.com/problems/palindrome-number
 * Space complexity = O(1)
 * Time complexity = O(N)
 */
function isPalindrome(x: number): boolean {
    // if smaller than 0
    if (x < 0) {
        return false;
    }
    const numStr = x.toString()
    let result = true;

    for (let i = 0; i<= numStr.length / 2; i++) {
        let rigthLetter = numStr[i]
        let leftLetter = numStr[numStr.length - 1 - i]
        if (rigthLetter !== leftLetter) {
            result = false;
            break;
        }
    }

    return result;
};
