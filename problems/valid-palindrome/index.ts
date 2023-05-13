/**
 * Solution for https://leetcode.com/problems/valid-palindrome
 */

function isPalindrome(s: string): boolean {
    let result = true;
    const re = /[a-zA-Z0-9]/;
    let finalArr = s.split('').filter(item => re.test(item));

    for (let i = 0; i < (finalArr.length/2); i++) {
        let leftElem = finalArr[i].toLowerCase()
        let rightElem = finalArr[finalArr.length - i - 1].toLowerCase()
        if (leftElem !== rightElem) {
          result = false;
          break;
        }
    }

    return result;
};
