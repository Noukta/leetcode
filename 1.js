/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const N = nums.length;
  const indexMap = nums.reduce((map, value, index) => {
    if (!map.has(value)) {
      map.set(value, index);
    }
    return map;
  }, new Map());

  for (let i = N - 1; i > 0; i--) {
    const index = indexMap.get(target - nums[i]);
    if (index !== undefined && index !== i) return [index, i];
  }
  return [];
};
