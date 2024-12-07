const arr = [6, 4, 7, 1, 56];

function quickSort(arr){
    if (arr.length < 2) return arr;

    const leftArr = [];
    const rightArr = [];

    const pivot = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const item = arr[i];
        if (item <= pivot){
            leftArr.push(item);
        } else {
            rightArr.push(item);
        }
    }

    const leftResult = quickSort(leftArr);
    const rightResult = quickSort(rightArr);

    // merge
    const result = [];

    for (let i = 0; i < leftResult.length; i++) {
        result.push(leftResult[i]);
    }

    result.push(pivot);

    for (let i = 0; i < rightResult.length; i++) {
        result.push(rightResult[i]);
    }

    return result;
}

console.log(quickSort(arr));