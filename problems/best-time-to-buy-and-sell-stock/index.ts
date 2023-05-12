/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let currentProfit = 0;
    let minValue = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        let item = prices[i];
        if (item === minValue) {
                continue;
        }
        if (item > minValue) {
            currentProfit = item - minValue 
        } else {
            minValue = item;
            currentProfit = 0;
        }

        if (currentProfit > maxProfit) {
            maxProfit = currentProfit
        }
        
    }

    return maxProfit;
};
