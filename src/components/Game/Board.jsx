import {useState} from 'react';

const Cell = (props) => {
    return (
        <div
            id={props.id}
            onClick={() => {
                props.affectChoice(props.id);
            }}
            className='cell'>
            {props.value}
        </div>
    );
};

const filledBoard = (board) => {
    return !board.some((element) => {
        return element === '';
    });
};

// compare four given parameter to simplify multiple comparison in winner function
const compareElements = (fstElement, secElement, thirdElement, fourthElement) => {
    return fstElement === secElement && secElement === thirdElement && thirdElement === fourthElement;
};

const winner = (board, logo) => {
    return (
        compareElements(board[0], board[1], board[2], logo) ||
        compareElements(board[3], board[4], board[5], logo) ||
        compareElements(board[6], board[7], board[8], logo) ||
        compareElements(board[0], board[3], board[6], logo) ||
        compareElements(board[1], board[4], board[5], logo) ||
        compareElements(board[2], board[5], board[8], logo) ||
        compareElements(board[1], board[4], board[8], logo) ||
        compareElements(board[2], board[5], board[8], logo)
    );
};

const Board = () => {
    const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
    const [logo, setLogo] = useState('X');

    const affectChoice = (id) => {
        setBoard(
            board.map((element, index) => {
                if (index === id) {
                    let symbol = logo;
                    if (logo === 'X') {
                        setLogo('O');
                    } else {
                        setLogo('X');
                    }
                    return symbol;
                }
                return element;
            })
        );
        if (winner(board, 'X')) {
            console.log('X wins');
        }
    };


    return (
        <div className='board'>
            {board.map((element, index) => {
                return <Cell id={index} affectChoice={affectChoice} value={element}/>;
            })}
        </div>
    );
};

export default Board;
