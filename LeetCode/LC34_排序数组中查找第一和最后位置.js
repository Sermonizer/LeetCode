/*
 * @Author: your name
 * @Date: 2020-08-08 10:02:18
 * @LastEditTime: 2020-08-08 11:15:23
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个按照升序排列的整数数组 nums，和一个目标值 target。
 *               找出给定目标值在数组中的开始位置和结束位置。
                 你的算法时间复杂度必须是 O(log n) 级别。
                 如果数组中不存在目标值，返回 [-1, -1]。
 * @FilePath: \LeetCode\LeetCode\LC34_排序数组中查找第一和最后位置.js
 */
var searchRange = function(nums, target) {
    if (nums.length < 1) return [-1, -1]
    let left = 0, right = nums.length, res = []
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    if (nums[left] !== target) {
        res.push(-1, -1)
        return res
    }
    res.push(left)
    right = nums.length
    while(left < right) {
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] <= target) {
            left = mid + 1
        }
        else {
            right = mid
        }
    }
    res.push(left - 1)
    return res
};

// 查找左侧边界1
function findLeft1(nums, target) {
    let left = 0, right = nums.length; // 注意
    while (left < right) { // 注意
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}
// 查找左侧边界2
function findLeft2(nums, target) {
    let left = 0, right = nums.length - 1;
    // 搜索区间为 [left, right]
    while (left <= right) {
        let mid = left + (right - left) / 2;
        if (nums[mid] < target) {
            // 搜索区间变为 [mid+1, right]
            left = mid + 1;
        } else {
            // 搜索区间变为 [left, mid-1]
            right = mid - 1;
        } 
    }
    // 检查出界情况
    if (left >= nums.length || nums[left] != target)
        return -1;
    return left;
}

// 查找右侧边界1
function findRight1(nums, target) {
    if (nums.length == 0) return -1;
    let left = 0, right = nums.length;
    while (left < right) {
        let mid = (left + right) / 2;
        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left - 1; // 注意
}

// 查找右侧边界2
function findRight2(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = left + (right - left) / 2;
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] == target) {
            // 这里改成收缩左侧边界即可
            left = mid + 1;
        }
    }
    // 这里改为检查 right 越界的情况，见下图
    if (right < 0 || nums[right] != target)
        return -1;
    return right;
}





console.log(searchRange([5,7,7,8,8,10], 8));