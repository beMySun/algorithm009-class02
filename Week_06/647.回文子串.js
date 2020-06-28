/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var countSubstrings = function (s) {
  let len = s.length;
  if (len < 2) return len;
  let result = 0;
  const centerSpread = function (str, left, right) {
    let len = str.length;
    let i = left;
    let j = right;
    while (i >= 0 && j < len) {
      if (str.charAt(i) === str.charAt(j)) {
        result++;
        i--;
        j++;
      } else {
        break;
      }
    }
  };
  for (let i = 0; i < len; i++) {
    centerSpread(s, i, i);
    centerSpread(s, i, i + 1);
  }
  return result;
};

// 链接：https://leetcode-cn.com/problems/palindromic-substrings/solution/zhong-xin-kuo-zhan-fa-ji-bai-9641-by-keon-2/
// var countSubstrings = function(s) {
//   var N = s.length;
//   var count = 0;

//   for (var center = 0; center < 2 * N - 1; ++center) {
//     var left = center / 2;
//     var right = left + center % 2;

//     while (left>= 0 && right < N && s[left] === s[right]) {
//       ++count;
//       left++;
//       right--;
//     }
//   }
//   return count;
// };
// @lc code=end
