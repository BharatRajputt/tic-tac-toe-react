import React, { useState } from 'react';
import './TicTac.css';
import circle_icon from '../assets/circle.png';
import cross_icon from '../assets/cross.png';
import { Winner } from './Winner';

const TicTac = () => {
    const [board, setBoard] = useState(Array(9).fill(''));
    const [move, setMove] = useState('x');
    const [gameOver, setGameOver] = useState(false);

    const click = (n) => {
        if (gameOver || board[n] !== '') {
            alert("Invalid move");
            return;
        }

        let squares = [...board];
        squares[n] = move;
        setBoard(squares);

        if (checkWin(squares)) {
            setGameOver(true);
            console.log("winner");
        } else {
            setMove(move === 'x' ? 'o' : 'x');
        }
    };

    const checkWin = (squares) => {
        const conditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return conditions.some(([a, b, c]) => {
            return squares[a] && squares[a] === squares[b] && squares[a] === squares[c];
        });
    };

    const renderIcon = (value) => {
        if (value === 'x') {
            return <img src={cross_icon} alt="cross" />;
        } else if (value === 'o') {
            return <img src={circle_icon} alt="circle" />;
        } else {
            return null;
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(''));
        setMove('x');
        setGameOver(false);
    };

    return (
        <div className="container">
            <h1 className='title'>Tic Tac Toe Game In <span>React</span> </h1>
            <div className="board">
                <div className="row-1">
                    <div className="boxes" onClick={() => { click(0) }}>{renderIcon(board[0])}</div>
                    <div className="boxes" onClick={() => { click(1) }}>{renderIcon(board[1])}</div>
                    <div className="boxes" onClick={() => { click(2) }}>{renderIcon(board[2])}</div>
                </div>
                <div className="row-2">
                    <div className="boxes" onClick={() => { click(3) }}>{renderIcon(board[3])}</div>
                    <div className="boxes" onClick={() => { click(4) }}>{renderIcon(board[4])}</div>
                    <div className="boxes" onClick={() => { click(5) }}>{renderIcon(board[5])}</div>
                </div>
                <div className="row-3">
                    <div className="boxes" onClick={() => { click(6) }}>{renderIcon(board[6])}</div>
                    <div className="boxes" onClick={() => { click(7) }}>{renderIcon(board[7])}</div>
                    <div className="boxes" onClick={() => { click(8) }}>{renderIcon(board[8])}</div>
                </div>
            </div>
            {checkWin(board) && <Winner />}
            <button className='reset' onClick={resetGame}>Reset</button>
        </div>
    );
};

export default TicTac;
