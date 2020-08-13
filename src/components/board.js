import React from 'react';
import Square from './square';


export default function Board({square, onClick}) {


    const renderSquare = (i, j) => {
        return (<Square
            value={square[i]}
            onClick={() => onClick(i, j)}
        />);
    }

    return (
        <div>
          
             <div className="board-row">
                {renderSquare(0, 'Col1 Row1')}
                {renderSquare(1, 'Col2 Row1')}
                {renderSquare(2, 'Col3 Row1')}
            </div>
            <div className="board-row">
                {renderSquare(3, 'Col1 Row2')}
                {renderSquare(4, 'Col2 Row2')}
                {renderSquare(5, 'Col3 Row2')}
            </div>
            <div className="board-row">
                {renderSquare(6, 'Col1 Row3')}
                {renderSquare(7, 'Col2 Row3')}
                {renderSquare(8, 'Col3 Row3')}
            </div>
        </div>
    )
}