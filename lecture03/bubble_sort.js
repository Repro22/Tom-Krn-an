// sort in-place

const arr = [6, 4, 7, 1, 56];

let swapped = true;

while(swapped){
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]){
            const temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;

            swapped = true;
        }
    }
}

console.log(arr);


