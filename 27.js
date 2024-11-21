function removeElement(nums, val) {
  const N = nums.length;
  let k = 0;

  for (const num of nums) {
    if (num === val) {
      continue;
    }
    nums[k] = num;
    k++;
  }
  return k;
}
