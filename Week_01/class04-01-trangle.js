/**
 * @param {number[]} heights
 * @return {number}
 */

// ## 柱状图中最大的矩形
// solution1: 暴力循环
var largestRectangleArea = function (heights) {
  var maxArea = 0;

  for (var i = 0; i < heights.length; i++) {
    for (j = i; j < heights.length; j++) {
      var minHeight = Number.MAX_VALUE;
      for (var k = i; k <= j; k++) {
        minHeight += Math.min(minHeight, heights[k]);
      }
      maxArea = Math.max(maxArea, minHeight * (j - i + 1));
    }
  }

  return maxArea;
};

// solution2: 最小栈
// TODO
