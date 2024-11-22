function searchInsert(nums, target) {
	let max = nums.length;
	let min = 0;
	let index = Math.floor(max / 2);
	while (nums[index] != target && min < max) {
		if (nums[index] > target) {
			max = index;
			index = Math.floor(min + (index - min) / 2);
		} else {
			min = index + 1;
			index = Math.ceil(index + (max - index) / 2);
		}
	}
	return index;
}
