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
		console.log(this.unitBoard);
		//Make an ordered board
		const orderedBoard = new Array(9)
			.fill(0)
			.map((val, index) =>
				new Array(9)
					.fill(0)
					.map((val, subindex) => index * 9 + subindex)
			);
		const rowedBoard = new Array(9)
			.fill(0)
			.map((val, index) => new Array(9).fill(0).map((val) => index));
		const columnedBoard = new Array(9)
			.fill(0)
			.map((val, index) =>
				new Array(9).fill(0).map((val, subindex) => subindex)
			);
		//console.log(orderedBoard);
		console.log(columnedBoard);
		this.board = columnedBoard.map((elem) => {
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
		// this.#shuffleRows();
		this.#shuffleColumns();
	}

	#shuffleNumbers() {
		for (let i = 0; i < this.fullSize; i++) {
			const ranNum = this.#getRandomInt(this.fullSize - 1) + 1;
			this.#swapNumbers(i + 1, ranNum);
		}
	}

	#swapNumbers(a, b) {
		this.board = this.board.map((row) => {
			return row.map((cell) => {
				if (cell === a) return b;
				if (cell === b) return a;
				return cell;
			});
		});
	}

	#shuffleRows() {
		let blockNumber;

		for (let i = 0; i < this.fullSize; i++) {
			const ranNum = this.#getRandomInt(this.size);
			blockNumber = Math.floor(i / this.size);
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
			const ranNum = this.#getRandomInt(this.size);
			blockNumber = Math.floor(i / this.size);
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
