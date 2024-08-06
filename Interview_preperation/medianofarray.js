const findMedianSortedArrays = (nums1, nums2) => {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);

    const n = merged.length;
    if (n % 2 === 0) {
        // If even number of elements, return the average of the middle two elements
        return (merged[n / 2 - 1] + merged[n / 2]) / 2;
    } else {
        // If odd number of elements, return the middle element
        return merged[Math.floor(n / 2)];
    }
};

// Example usage
console.log(findMedianSortedArrays([1, 3, 5], [2, 4, 6])); // Output: 3.5
