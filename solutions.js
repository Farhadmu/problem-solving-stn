/* STN-7 Problem Solving Assessment - all 20 solutions in a single file */

// ---------------------------------------------------------------
// Problem 1: Staircase  -- O(n^2) output size, O(n) per row
// ---------------------------------------------------------------
/**
 * @param {number} n
 * @return {string}
 */
var staircase = function(n) {
  const rows = [];
  for (let i = 1; i <= n; i++) {
    rows.push(' '.repeat(n - i) + '#'.repeat(i));
  }
  return rows.join('\n');
};

// ---------------------------------------------------------------
// Problem 2: Grading Students  -- O(n)
// ---------------------------------------------------------------
/**
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function(grades) {
  return grades.map((g) => {
    if (g < 38) return g;
    const next = Math.ceil(g / 5) * 5;
    return next - g < 3 ? next : g;
  });
};

// ---------------------------------------------------------------
// Problem 3: Time Conversion  -- O(1)
// ---------------------------------------------------------------
/**
 * @param {string} s
 * @return {string}
 */
var timeConversion = function(s) {
  const suffix = s.slice(-2).toUpperCase();
  const hour = parseInt(s.slice(0, 2), 10);
  const rest = s.slice(2, -2);
  let h = hour % 12;           // 12 -> 0
  if (suffix === 'PM') h += 12; // 12PM -> 12, 1PM -> 13 ...
  return String(h).padStart(2, '0') + rest;
};

// ---------------------------------------------------------------
// Problem 4: String Repeat  -- O(n * |s|)
// ---------------------------------------------------------------
/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = function(n, s) {
  let result = '';
  for (let i = 0; i < n; i++) result += s;
  return result;
};

// ---------------------------------------------------------------
// Problem 5: Reversed Strings  -- O(n)
// ---------------------------------------------------------------
/**
 * @param {string} str
 * @return {string}
 */
var solution = function(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) result += str[i];
  return result;
};

// ---------------------------------------------------------------
// Problem 6: Sum of Positive  -- O(n)
// ---------------------------------------------------------------
/**
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function(arr) {
  let sum = 0;
  for (const x of arr) if (x > 0) sum += x;
  return sum;
};

// ---------------------------------------------------------------
// Problem 7: Grasshopper - Summation  -- O(1) via formula
// ---------------------------------------------------------------
/**
 * @param {number} num
 * @return {number}
 */
var summation = function(num) {
  return (num * (num + 1)) / 2;
};

// ---------------------------------------------------------------
// Problem 8: Convert a Boolean to a String  -- O(1)
// ---------------------------------------------------------------
/**
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = function(b) {
  return b ? 'true' : 'false';
};

// ---------------------------------------------------------------
// Problem 9: Fizz Buzz  -- O(n)
// ---------------------------------------------------------------
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push('FizzBuzz');
    else if (i % 3 === 0) result.push('Fizz');
    else if (i % 5 === 0) result.push('Buzz');
    else result.push(String(i));
  }
  return result;
};

// ---------------------------------------------------------------
// Problem 10: Running Sum of 1D Array  -- O(n)
// ---------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  const result = new Array(nums.length);
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    result[i] = total;
  }
  return result;
};

// ---------------------------------------------------------------
// Problem 11: Richest Customer Wealth  -- O(rows * cols)
// ---------------------------------------------------------------
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let max = 0;
  for (const customer of accounts) {
    let wealth = 0;
    for (const amount of customer) wealth += amount;
    if (wealth > max) max = wealth;
  }
  return max;
};

// ---------------------------------------------------------------
// Problem 12: Remove Duplicates from Sorted Array  -- O(n) time, O(1) space
// ---------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k++] = nums[i];
    }
  }
  return k;
};

// ---------------------------------------------------------------
// Problem 13: Contains Duplicate  -- O(n) time, O(n) space
// ---------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const seen = new Set();
  for (const x of nums) {
    if (seen.has(x)) return true;
    seen.add(x);
  }
  return false;
};

// ---------------------------------------------------------------
// Problem 14: Move Zeroes  -- O(n) time, O(1) space, in-place
// ---------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function(nums) {
  let write = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== write) {
        const tmp = nums[write];
        nums[write] = nums[i];
        nums[i] = tmp;
      }
      write++;
    }
  }
};

// ---------------------------------------------------------------
// Problem 15: Merge Sorted Array  -- O(m + n) time, O(1) space
// Merge from the back so no valid element is overwritten.
// ---------------------------------------------------------------
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
var merge = function(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
};

// ---------------------------------------------------------------
// Problem 16: 3Sum  -- O(n^2) time (sort + two pointers)
// ---------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const arr = [...nums].sort((a, b) => a - b);
  const result = [];
  const len = arr.length;
  for (let i = 0; i < len - 2; i++) {
    if (arr[i] > 0) break;
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    let lo = i + 1;
    let hi = len - 1;
    while (lo < hi) {
      const sum = arr[i] + arr[lo] + arr[hi];
      if (sum === 0) {
        result.push([arr[i], arr[lo], arr[hi]]);
        while (lo < hi && arr[lo] === arr[lo + 1]) lo++;
        while (lo < hi && arr[hi] === arr[hi - 1]) hi--;
        lo++;
        hi--;
      } else if (sum < 0) {
        lo++;
      } else {
        hi--;
      }
    }
  }
  return result;
};

// ---------------------------------------------------------------
// Problem 17: Plus One  -- O(n)
// ---------------------------------------------------------------
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const result = [...digits];
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] < 9) {
      result[i]++;
      return result;
    }
    result[i] = 0;
  }
  result.unshift(1); // every digit was 9
  return result;
};

// ---------------------------------------------------------------
// Problem 18: Reverse String  -- O(n) time, O(1) space, in-place
// ---------------------------------------------------------------
/**
 * @param {string[]} s
 * @return {void}
 */
var reverseString = function(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const tmp = s[left];
    s[left] = s[right];
    s[right] = tmp;
    left++;
    right--;
  }
};

// ---------------------------------------------------------------
// Problem 19: Length of Last Word  -- O(n), O(1) space
// ---------------------------------------------------------------
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let i = s.length - 1;
  while (i >= 0 && s[i] === ' ') i--; // skip trailing spaces
  let length = 0;
  while (i >= 0 && s[i] !== ' ') {
    length++;
    i--;
  }
  return length;
};

// ---------------------------------------------------------------
// Problem 20: Longest Common Prefix  -- O(S) where S = total characters
// ---------------------------------------------------------------
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || strs.length === 0) return '';
  const first = strs[0];
  for (let i = 0; i < first.length; i++) {
    const ch = first[i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== ch) {
        return first.slice(0, i);
      }
    }
  }
  return first;
};

// Export for testing (ignored in a browser/judge environment)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    staircase, gradingStudents, timeConversion, repeatStr, solution,
    positiveSum, summation, booleanToString, fizzBuzz, runningSum,
    maximumWealth, removeDuplicates, containsDuplicate, moveZeroes, merge,
    threeSum, plusOne, reverseString, lengthOfLastWord, longestCommonPrefix,
  };
}
