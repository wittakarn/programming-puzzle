const maxProfit = function (prices) {
    let bestTotalProfit = 0;
    for (let index = 0; index < prices.length; index++) {
        let totalProfit = 0;
        let currentIndex = index;
        let nextIndex = currentIndex + 1;
        let bestPickProfit = 0;

        while (currentIndex < prices.length && nextIndex < prices.length) {
            const currentProfit = prices[nextIndex] - prices[currentIndex];
            if (bestPickProfit < currentProfit) {
                bestPickProfit = currentProfit;
                nextIndex = nextIndex + 1
            } else {
                currentIndex = nextIndex;
                nextIndex = currentIndex + 1
                totalProfit = totalProfit + bestPickProfit;
                bestPickProfit = 0;
            }
        }

        totalProfit = totalProfit + bestPickProfit;
        if (bestTotalProfit < totalProfit) {
            bestTotalProfit = totalProfit;
        }
    }
    return bestTotalProfit;
};

console.log(`===================== maxProfit([7, 1, 5, 3, 6, 4]): ${maxProfit([7, 1, 5, 3, 6, 4])} =====================`);
console.log(`===================== maxProfit([1, 2, 3, 4, 5]): ${maxProfit([1, 2, 3, 4, 5])} =====================`);
console.log(`===================== maxProfit([7, 6, 4, 3, 1]): ${maxProfit([7, 6, 4, 3, 1])} =====================`);
console.log(`===================== maxProfit([6, 1, 3, 2, 4, 7]): ${maxProfit([6, 1, 3, 2, 4, 7])} =====================`);
console.log(`===================== maxProfit([2, 1, 2, 0, 1]): ${maxProfit([2, 1, 2, 0, 1])} =====================`);
console.log(`===================== maxProfit([3, 2, 6, 5, 0, 3]): ${maxProfit([3, 2, 6, 5, 0, 3])} =====================`);
console.log(`===================== maxProfit([2, 1, 2, 1, 0, 1, 2]): ${maxProfit([2, 1, 2, 1, 0, 1, 2])} =====================`);
console.log(`===================== maxProfit([1, 3, 5, 4, 3, 7, 6, 9, 2, 4]): ${maxProfit([1, 3, 5, 4, 3, 7, 6, 9, 2, 4])} =====================`);
console.log(`===================== maxProfit([2, 1, 4, 7, 11]): ${maxProfit([2, 1, 4, 7, 11])} =====================`);