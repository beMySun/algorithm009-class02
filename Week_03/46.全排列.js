/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var res = [];

  function back_track(list, temp_list, nums) {    
    if(temp_list.length === nums.length) {
      return list.push([...temp_list]);
    }

    for(var i = 0; i < nums.length; i++) {      
      if (temp_list.includes(nums[i])) continue;
      temp_list.push(nums[i]);
      back_track(list, temp_list, nums);
      temp_list.pop();
    }
  }

  back_track(res, [], nums);

  return res;
};
// @lc code=end

