function binarySearch(arr, number) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === number) {
            return arr[mid] ? true : false;
        }

        if (arr[mid] < number) {
            left = mid + 1;
        }

        if (arr[mid] > number) {
            right = mid - 1;
        }
    }
}


console.log(binarySearch([1, 2, 3, 5, 7, 10], 5));