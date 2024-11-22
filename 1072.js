/**
 * @param {number[][]} matrix
 * @return {number}
 */
const maxEqualRowsAfterFlips = (matrix) => {
	const patterns = convertMatrixToPatterns(matrix);
	return countMaxOccurrences(patterns);
};

const convertArrayToPattern = (arr) => {
	const groups = arr.reduce((acc, curr, idx) => {
		if (idx === 0 || arr[idx - 1] !== curr) {
			acc.push([]);
		}
		acc[acc.length - 1].push(curr);
		return acc;
	}, []);
	return groups.map((group) => "*".repeat(group.length)).join("|");
};

const convertMatrixToPatterns = (matrix) => {
	return matrix.map((row) => {
		return convertArrayToPattern(row);
	});
};

const countMaxOccurrences = (arr) => {
	const countMap = arr.reduce((acc, curr) => {
		acc.set(curr, (acc.get(curr) || 0) + 1);
		return acc;
	}, new Map());
	return Math.max(...Array.from(countMap.values()));
};
