export const sortArray = (inputArr) => {
    const length = inputArr.length;
    for (let pivot = 1; pivot < length; pivot++) {
        const currentValue = inputArr[pivot];
        let j = pivot - 1;
        while (j >= 0 && inputArr[j] > currentValue) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = currentValue;
    }
    return inputArr;
}
