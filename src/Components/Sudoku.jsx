import React from "react";

const Sudoku = ({ board }) => {
	return (
		<div>
			{board.map((row) => {
				return (
					<div key={row} className="row" >
						{row.map((cell) => {
							return (
								<div
									key={cell}
                                    className="cell"
								>
									{cell}
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export default Sudoku;
