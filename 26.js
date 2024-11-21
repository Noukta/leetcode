function removeDuplicates(nums) {
  const numsUnique = new Set(nums);
  const k = numsUnique.size;

  let i = 0;
  numsUnique.forEach((e) => {
    nums[i++] = e;
  });
  return k;
}
