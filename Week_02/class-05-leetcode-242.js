/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 方法1:
// var isAnagram = function (s, t) {
//   return s.split('').sort().join('') == t.split('').sort().join('');
// };

// 方法2: Set
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;
  
  var ary = new Array(26).fill(0);

  for(var i = 0; i < s.length; i++) {
      ary[s[i].charCodeAt(0) - 97]++;
      ary[t[i].charCodeAt(0) - 97]--;
  }
  for(var i = 0; i < ary.length; i++) {
      if(ary[i] !== 0) return false;
  }
  return true
};
// @lc code=end

