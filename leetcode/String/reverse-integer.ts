/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function (x) {
    if(x > 2147483647) return 0;

    const isNegative = x < 0;
    let result = 0;
    let originalRemaining = isNegative ? x * -1 : x;

    let position = 0;
    let revertCount = 0;
    while (originalRemaining !== 0) {
        revertCount = revertCount + 1;
        const digitSize = Math.ceil((Math.log(originalRemaining + 1) / Math.LN10));
        const remaining = originalRemaining % 10;
        originalRemaining = (originalRemaining - remaining) / 10;
        result = result + (remaining * Math.pow(10 , digitSize - 1));
        
        if(result > 2147483647) return 0;
    }

    return isNegative ? result * -1 : result;
};

console.log(`result: ${reverse(9999)}`);