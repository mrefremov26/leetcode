/**
 * https://leetcode.com/problems/generate-parentheses
 *
 */
function generateParenthesis(n: number): string[] {
    const result: string[] = [];
    const createParentheses = (left, right, str = '') => {
        if(left === 0 && right === 0) {
            result.push(str);
            return;
        }
        if (right < left || left < 0) {
            return;
        }

        createParentheses(left - 1, right, `${str}(`)
        createParentheses(left, right - 1, `${str})`)
    }
    createParentheses(n, n)
    return result
};
