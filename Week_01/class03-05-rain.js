/**
 * @param {number[]} height
 * @return {number}
 */

//  solution 1: 暴力双循环
var maxArea = function (height) {
  var max = 0;

  for (var i = 0; i < height.length; i++) {
    for (var j = i + 1; j < height.length; j++) {
      max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
    }
  }

  return max;
};

//  solution 1: 双指针
var maxArea = function (height) {
  var max = 0;
  var left = 0, right = height.length - 1;

  while (left < right) {
    var area = (right - left) * Math.min(height[left], height[right]);
    max = Math.max(max, area);
    
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};
