var findChampion = function (n, edges) {
	const isUndefeated = new Array(n).fill(true);

	for (const [winner, loser] of edges) {
		isUndefeated[loser] = false;
	}

	let champion = -1;

	for (let team = 0; team < n; team++) {
		if (isUndefeated[team]) {
			if (champion != -1) return -1;
			champion = team;
		}
	}

	return champion;
};
