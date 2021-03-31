# Merge Intervals

### Template

Instantiate the result array, and a helper data structure to track if you have already merged that interval (so you can skip). Sort the array in order of Interval start time. Then, iterate over the array, skipping any interval that has been merged in a previous iteration. Evaluate if the two intervals overlap. If they do, update the start and end values of the current interval and update the helper data structure. At the end of each iteration, push the fully merged interval to the results array.

Time: O(N) | Space: O(N)

```js
class Interval {
  constructor(start, end) {
    this.start = start
    this.end = end
  }
}

const merge = (intervals) => {
  if (!intervals || !intervals.length) return [];
  if (intervals.length < 2) return intervals;

  const mergedIntervals = [];
  const mergedIndices = new Array(intervals.length).fill(false);
  intervals.sort((a, b) => a.start-b.start);

  for (let i = 0; i < intervals.length; i++) {
    if (mergedIndices[i]) continue;
    const x = intervals[i];
    for (let j = i+1; j < intervals.length; j++) {
      if (mergedIndices[j]) continue;
      const y = intervals[j];
      if (overlap(x, y) === true) {
        x.start = Math.min(x.start, y.start);
        x.end = Math.max(x.end, y.end);
        mergedIndices[j] = true;
      }
    }
    mergedIntervals.push(x);
  }

  return mergedIntervals;
}

const overlap = (a, b) => {
  // do they overlap
  return ((a.start <= b.start && b.start < a.end) || (b.start <= a.start && a.start < b.end));
}
```
