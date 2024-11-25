/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
	let minNum = 1000000;
	let countNegatif = 0;
	let sum = matrix.reduce((sum, row) => {
		return (
			sum +
			row.reduce((rowSum, num) => {
				if (num <= 0) {
					countNegatif++;
					num *= -1;
				}
				minNum = minNum < num ? minNum : num;

				return rowSum + num;
			}, 0)
		);
	}, 0);

	if (countNegatif % 2 === 1) {
		sum -= 2 * minNum;
	}
	return sum;
};

const matrix = [
	[-3, 0, 0],
	[0, 0, 0],
	[0, 3, 2],
];
console.log(maxMatrixSum(matrix));
