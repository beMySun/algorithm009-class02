/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Given array nums = [-1, 0, 1, 2, -1, -4],
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

var threeSum = function (nums) {
  const result = [];
  const length = nums.length;

  if (length === 3) return [nums];

  var sortedNums = num.sort((a, b) => a - b);

  for (let i = 0; i < l; i++) {
    if (i !== 0 && sortedNums[i] === sortedNums[i - 1]) continue;
    var j = i + 1;
    var k = l - 1;
    while (j < k) {
      var sum = temp[i] + temp[j] + temp[k];
      if (sum === 0) {
        res.push([temp[i], temp[j], temp[k]]);
        while (j++ < k && temp[j - 1] === temp[j]) {
          /* do nothing*/
        }
        while (k-- > j && temp[k] === temp[k + 1]) {
          /* do nothing*/
        }
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }

  return result;
};
