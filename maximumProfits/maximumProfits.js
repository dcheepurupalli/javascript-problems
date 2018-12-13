function maximumProfits(prices){
    const profits = [0];
    for (let i = 0; i < prices.length; i++) { // O(n)
        for (let j = i +1; j < prices.length; j++) { // O(n)
            const profit = prices[j] - prices[i];
            profits.push(profit);
        } 
    }
    return Math.max(...profits);
}

// Time : O(n^2)
//  Space : O(n^2)
console.time();
console.log(maximumProfits([10, 7, 5, 8, 11, 9]));
console.timeEnd();

function maximumProfitsSol1(prices){
    let minPrice = Infinity;
    let maxPrice = 0;

    for (let i = 0; i < prices.length; i++) {
        const currentPrice = prices[i]
        minPrice = Math.min(currentPrice, minPrice);
        maxPrice = Math.max(maxPrice, currentPrice - minPrice)
    }
    return maxPrice;
}

// Time : O(n)
// Space : O(1)

console.time();
console.log(maximumProfitsSol1([10, 7, 5, 8, 11, 9]));
console.timeEnd();