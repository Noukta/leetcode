/**
 * @param {character[][]} box
 * @return {character[][]}
 */
function rotateTheBox(box) {
	const rows = box.length;
	const cols = box[0].length;
	if (cols === 1) return transpose(box, rows, cols);
	return transpose(applyGravity(box, cols), rows, cols);
}

function transpose(matrix, rows, cols) {
	const result = Array.from({ length: cols }, () => new Array(rows).fill(0));
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			result[j][i] = matrix[rows - 1 - i][j];
		}
	}
	return result;
}
function applyGravity(box, cols) {
	box.forEach((row) => {
		let stoneIndex = cols - 1;
		for (let c = cols - 1; c > -1; c--) {
			if (row[c] === ".") {
				if (stoneIndex > c - 1) stoneIndex = c;
				for (let s = stoneIndex - 1; s > -1; s--) {
					if (row[s] === "*") {
						c = s;
						stoneIndex = s - 1;
						break;
					}
					if (row[s] === "#") {
						row[c] = "#";
						row[s] = ".";
						stoneIndex = s;
						break;
					}
				}
			}
		}
	});
	return box;
}
