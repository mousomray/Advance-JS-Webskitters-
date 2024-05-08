const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    for (left, right; left <= right;) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Not found
};

const items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binarySearch(items, 1)); // Output: 0
console.log(binarySearch(items, 5)); // Output: 4

// Bujhte parini 
