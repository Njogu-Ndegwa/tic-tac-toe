import React, { useState } from 'react';
import Board from './board';

import { calculateWinner } from '../helper';

export default function Game() {

    const [history, setHistory] = useState([{ squares: Array(9).fill(null), moves: [""] }]);
    const [xIsNext, setxIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);

    const handleClick = (i, j) => {
        const histories = history.slice(0, stepNumber + 1)
        const current = histories[histories.length - 1];
        const square = current.squares.slice();
        let move = current.moves.slice()
        move = j

        if (calculateWinner(square) || square[i]) {
            return;
        }

        square[i] = xIsNext ? 'X' : 'O';

        setHistory(histories.concat([{ squares: square, moves: move }]));
        setxIsNext(!xIsNext);
        setStepNumber(histories.length)
        console.log(history)
    }

    const jumpTo = (step) => {
        setStepNumber(step)
        setxIsNext((step % 2) === 0)

    }

    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
        console.log(step, "step")
        const desc = move ? 'Go to move # ' + step.moves : 'Go to start';
        return (
            <li key={move} >
                <button onClick={() => jumpTo(move)}> {desc} </button>
            </li>
        )

    });


    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player is: ' + (xIsNext ? 'X' : 'O');
    }


    return (
        <div className="game">
            <div className="game-board">
                <Board
                    square={current.squares}
                    onClick={(i, j) => handleClick(i, j)}
                />
            </div>
            <div className="game-info">
                <div> {status} </div>
                <ol> {moves} </ol>
            </div>

        </div>
    )
}