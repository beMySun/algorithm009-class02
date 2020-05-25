/**
 * 40. 最小的k个数
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  var result = [];
  var nums = arr.sort((a, b) => a - b);
  for(var i = 0; i < k; i++) {
      result.push(nums[i])
  }

  return result;
};