/**
 * @param {number[][]} matrix
 * @return {number}
 */
const maxEqualRowsAfterFlips = (matrix) => {
	const numEqualRows = countEqualRows(matrix);
	const indexMatrix = extractMatrixIndexes(matrix);
	const maxEqualRows = countMaxDuplication(indexMatrix);

	return numEqualRows > maxEqualRows ? numEqualRows : maxEqualRows;
};

function countMaxDuplication(indexMatrix) {
	const stringifiedArrays = indexMatrix
		.flat(1)
		.map((arr) => JSON.stringify(arr));
	const countMap = stringifiedArrays.reduce((acc, curr) => {
		acc.set(curr, (acc.get(curr) || 0) + 1);
		return acc;
	}, new Map());
	console.log(countMap);
	return Math.max(...Array.from(countMap.values()));
}

const extractMatrixIndexes = (matrix) => {
	return matrix.map((row) => {
		const zeroIndexes = row.reduce(
			(acc, val, idx) => (val === 0 ? [...acc, idx] : acc),
			[]
		);
		const oneIndexes = row.reduce(
			(acc, val, idx) => (val === 1 ? [...acc, idx] : acc),
			[]
		);
		return [zeroIndexes, oneIndexes];
	});
};

const countEqualRows = (matrix) => {
	let count = 0;
	matrix.forEach((row) => {
		count += row.some((b) => b === 0) && row.some((b) => b === 1) ? 0 : 1;
	});
	return count;
};

// Example usage
const matrix = [
	[0, 1, 0],
	[1, 1, 0],
	[0, 0, 1],
];

console.log(maxEqualRowsAfterFlips(matrix));
