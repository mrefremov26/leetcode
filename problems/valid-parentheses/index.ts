/**
 * There are solution for https://leetcode.com/problems/valid-parentheses
 */
const reversedType = {
    '(' : ')',
    ')' : '(',
    '[' : ']',
    ']' : '[',
    '{' : '}',
    '}' : '{',
};
const closedParenthesis = ['}' , ')' , ']']

const isValid = (s: string): boolean => {
    const stack = [s[0]]
    for (let i = 1; i < s.length; i++) {
        if (closedParenthesis.includes(s[i]) && stack[stack.length - 1] === reversedType[s[i]]) {
            stack.pop()
        }
        else {
            stack.push(s[i])
        }
    }
    return !stack.length
};