import { useState } from "react";
import sudoku from "./sudoku";
import Sudoku from "./Components/Sudoku";
import "./App.css";

function App() {
	const s = new sudoku(3);
	const [board, setBoard] = useState(s.board);

	return (
		<>
			<h3>Sudoku</h3>
			<Sudoku board={board} />
		</>
	);
}

export default App;
