import { useState } from "react";
import sudoku from "./sudoku";
import "./App.css";

function App() {
    const s = new sudoku(3);
    console.log(s.size);
	return <>Test</>;
}

export default App;
