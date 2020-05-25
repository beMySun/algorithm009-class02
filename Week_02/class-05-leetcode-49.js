/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// 思路: 以排序后的 str 作为 key, values 为符合 key 的 Array.
var groupAnagrams = function (strs) {
  const map = new Map();

  for (var i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split('').sort().join();
    if (map.has(sortedStr)) {
      let temp = map.get(sortedStr);
      temp.push(strs[i]);
      map.set(sortedStr, temp);
    } else {
      map.set(sortedStr, [strs[i]]);
    }
  }

  return [...map.values()];
};
// @lc code=end
