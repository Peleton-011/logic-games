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

	constructor(size) {
		this.size = size || 3;
		this.fullSize = this.size ** 2;
		this.board = [];
		this.#newBoardByShuffle();
		console.log(this.board);
	}
	#newBoardByShuffle() {
		//Deep copy the unitBoard
		console.log("Before deepCopy :");
		console.log(this.board);
		//Make an ordered board
		const orderedBoard = new Array(9)
			.fill(0)
			.map((val, index) =>
				new Array(9)
					.fill(0)
					.map((val, subindex) => index * 9 + subindex)
			);
		//console.log(orderedBoard);
		this.board = this.unitBoard.map((elem) => {
			console.log("row: ");
			console.log(elem);
			return elem.map((cell) => {
				//console.log("cell");
				//console.log(cell);
				return cell;
			});
		});
		console.log("After deepCopy :");
		console.log(this.board);
		//swap numbers
		//this.#shuffleNumbers();
		//shuffle rows and columns, then subgrid rows and columns
		//this.#shuffleRows();
		//this.#shuffleColumns();
	}

	#shuffleNumbers() {
		for (let i = 0; i < this.fullSize; i++) {
			const ranNum = this.#getRandomInt(this.fullSize) + 1;
			this.#swapNumbers(i, ranNum);
		}
	}

	#swapNumbers(a, b) {
		for (let y = 0; y < this.fullSize; y++) {
			for (let x = 0; x < this.fullSize; x++) {
				if (this.board[x][y] == a) {
					this.board[x][y] = b;
				} else if (this.board[x][y] == b) {
					this.board[x][y] = a;
				}
			}
		}
	}

	#shuffleRows() {
		let blockNumber;

		for (let i = 0; i < this.fullSize; i++) {
			const ranNum = this.#getRandomInt(this.size) + 1;
			blockNumber = i / this.size;
			this.#swapRows(i, blockNumber * this.size + ranNum);
		}
	}

	#swapRows(r1, r2) {
		const row = this.board[r1];
		this.board[r1] = this.board[r2];
		this.board[r2] = row;
	}

	#shuffleColumns() {
		let blockNumber;

		for (let i = 0; i < this.fullSize; i++) {
			const ranNum = this.#getRandomInt(this.size) + 1;
			blockNumber = i / this.size;
			this.#swapColumns(i, blockNumber * this.size + ranNum);
		}
	}
	#swapColumns(c1, c2) {
		let colVal;
		for (let i = 0; i < 9; i++) {
			colVal = this.board[i][c1];
			this.board[i][c1] = this.board[i][c2];
			this.board[i][c2] = colVal;
		}
	}

	#getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}
}
export default sudoku;
