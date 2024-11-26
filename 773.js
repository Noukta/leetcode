const directions = [
	[1, 3],
	[0, 2, 4],
	[1, 5],
	[0, 4],
	[1, 3, 5],
	[2, 4],
];
const target = "123450";
var minMoves = Infinity;

function boardToString(board) {
	return board.flat().join("");
}

function dfs(current, zeroIndex, depth, visited) {
	if (current === target) {
		minMoves = Math.min(minMoves, depth);
		return;
	}
	if (
		depth >= minMoves ||
		(visited[current] !== undefined && visited[current] <= depth)
	) {
		return;
	}

	visited[current] = depth;

	for (const nextIndex of directions[zeroIndex]) {
		const nextBoard = current.split("");
		[nextBoard[zeroIndex], nextBoard[nextIndex]] = [
			nextBoard[nextIndex],
			nextBoard[zeroIndex],
		];
		const nextString = nextBoard.join("");

		dfs(nextString, nextIndex, depth + 1, visited);
	}
}

function slidingPuzzle(board) {
	const start = boardToString(board);
	const zeroIndex = start.indexOf("0");
	const visited = {};
	dfs(start, zeroIndex, 0, visited);
	return minMoves === Infinity ? -1 : minMoves;
}
