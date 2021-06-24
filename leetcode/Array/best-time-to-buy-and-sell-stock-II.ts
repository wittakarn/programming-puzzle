const maxProfit = function(prices: number[]): number {
    let bestProfit: number = 0;
    for (let index = 0; index < prices.length; index++) {
        for (let startIndex = index + 1; startIndex < prices.length; startIndex++) {
            let newProfit: number = calculateProfit(index, startIndex, prices);
            if(bestProfit < newProfit) {
                bestProfit = newProfit;
            }
        }
    }
    return bestProfit;
};

function calculateProfit(index: number, startIndex: number, prices: number[]): number {
    const priceSize = prices.length;
    let profit = 0;
    let currentIndex = index;
    let nextIndex = startIndex;
    while(currentIndex < priceSize && nextIndex < priceSize) {
        if(prices[currentIndex] < prices[nextIndex]) {
            profit = profit + (prices[nextIndex] - prices[currentIndex]);

            currentIndex = nextIndex + 1;
            nextIndex = currentIndex + 1;
        } else {
            nextIndex = nextIndex + 1;
        }
    }

    return profit;
}

// console.log(maxProfit([7,1,5,3,6,4]));
// console.log(maxProfit([1,2,3,4,5]));
// console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([6,1,3,2,4,7]));