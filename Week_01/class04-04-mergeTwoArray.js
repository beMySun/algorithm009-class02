/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 解法1: 合并后排序
var merge = function (nums1, m, nums2, n) {
  for (var i = 0; i < nums2.length; i++) {
    nums1[m + i] = nums2[i];
  }
  nums1.sort((a, b) => a - b);
};

// 解法2: 判断元素大小, 直接插入
var merge = function (nums1, m, nums2, n) {
  let length = m + n;
  while(n > 0) {
    if(m <= 0) { // num1中的元素已经排完， 剩下的nums直接放进来
      nums1[--length] = nums2[--n];
      continue;
    }
    nums1[--length] = nums1[m-1] > nums2[n-1] ? nums1[--m] : nums2[--n];
  }
};