class sudoku {
	unitBoard = [
		[1, 2, 3, 4, 5, 6, 7, 8, 9],
		[4, 5, 6, 7, 8, 9, 1, 2, 3],
		[7, 8, 9, 1, 2, 3, 4, 5, 6],

		[2, 3, 1, 5, 6, 4, 8, 9, 7],
		[5, 6, 4, 8, 9, 7, 2, 3, 1],
		[8, 9, 7, 2, 3, 1, 5, 6, 4],

		[3, 1, 2, 6, 4, 5, 9, 7, 8],
		[6, 4, 5, 9, 7, 8, 3, 1, 2],
		[9, 7, 8, 3, 1, 2, 6, 4, 5],
	];

	board = [];
	#newBoardByShuffle() {
        //Deep copy the unitBoard
		this.board = this.unitBoard.map((elem) => elem.map((elem) => elem));
    }

	#shuffleNumbers() {
		for (i = 0; i < 9; i++) {
			const ranNum = this.#getRandomInt(this.size ** 2) + 1;
			this.#swapNumbers(i, ranNum);
		}
	}

	#swapNumbers(a, b) {
		for (y = 0; y < 9; y++) {
			for (x = 0; x < 9; x++) {
				if (this.board[x][y] == a) {
					this.board[x][y] = b;
				} else if (this.board[x][y] == b) {
					this.board[x][y] = a;
				}
			}
		}
	}

	#getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	constructor(size) {
		this.size = size || 3;
	}
}
export default sudoku;
