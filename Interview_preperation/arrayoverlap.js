const mergeIntervals = (intervals) => {
    if (intervals.length === 0) return [];

    intervals.sort((a, b) => a[0] - b[0]);

    return intervals.reduce((merged, [start, end]) => {
        if (merged.length && merged[merged.length - 1][1] >= start) {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], end);
        } else {
            merged.push([start, end]);
        }
        return merged;
    }, []);
};

// Example usage
console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]));
// Output: [[1, 6], [8, 10], [15, 18]]
