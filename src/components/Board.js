import React from 'react';
import Square from './Square';

const ROW = 20;
const COL = 20;
let arrHL = []; 

const checkCol = (row, col, arr) => {
  if (row > ROW - 5) {
    return false;
  }
  let count;

  arrHL = [];
  arrHL.push(row * COL + col);

  for (count = 1; count < 5; count+=1) {
    if (arr[(row + count) * COL + col] !== arr[row * COL + col]) {
      return false;
    }
    arrHL.push((row + count) * COL + col);
  }

  if (row === 0 || (row + count) === COL) {
    return true;
  }
  
  if (arr[(row - 1) * COL + col] === null || arr[(row + count) * COL + col] === null) {
    return true;
  }
  return false;
}

const checkRow = (row, col, arr) => {
  if (col > COL - 5) {
    return false;
  }
  let count;
  arrHL = [];
  arrHL.push(row * COL + col);
  for (count = 1; count < 5; count+=1) {
    if (arr[row * COL + (col + count)] !== arr[row * COL + col]) {
      return false;
    }
    arrHL.push(row * COL + (col + count));
  }
  
  if (col === 0 || (col + count) === COL) {
    return true;
  }
  
  if (arr[row * COL + (col - 1)] === null || arr[row * COL + (col + count)] === null) {
    return true;
  }
  return false;
}



const checkDiagonal1 = (row, col, arr) => {
  if (row > COL - 5 || col > COL - 5) {
    return false;
  }
  let count;
  arrHL = [];
  arrHL.push(row * COL + col);
  for (count = 1; count < 5; count+=1) {
    if (arr[(row + count) * COL + (col + count)] !== arr[row * COL + col]) {
      return false;
    }
    arrHL.push((row + count) * COL + (col + count));
  }
  if (row === 0 || (row + count) === ROW || col === 0 || (col + count) === COL) {
    return true;
  }
  if (arr[(row - 1) * COL + (col - 1)] === null || arr[(row + count) * COL + (col + count)] === null) {
    return true;
  }
  return false;
}

const checkDiagonal2 = (row, col, arr) => {
  if (row < 4 || col > COL - 5) {
    return false;
  }
  let count;
  arrHL = [];
  arrHL.push(row * COL + col);
  for (count = 1; count < 5; count+=1) {
    if (arr[(row - count) * COL + (col + count)] !== arr[row * COL + col]) {
      return false;
    }
    arrHL.push((row - count) * COL + (col + count));
  }
  if (row === 4 || row === (ROW - 1) || col === 0 || (col + count) === COL) {
    return true;
  }
  if (arr[(row + 1) * COL + (col - 1)] === null || arr[(row - count) * COL + (col + count)] === null) {
    return true;
  }
  return false;
}

export const calculateWinner = (squares) => {
  for (let i = 0; i < squares.length; i+=1) {
    if (squares[i]) {
      if (checkCol(parseInt(i / COL, 10), parseInt(i % COL, 10), squares) ||
        checkRow(parseInt(i / COL, 10), parseInt(i % COL, 10), squares) ||
        checkDiagonal1(parseInt(i / COL, 10), parseInt(i % COL, 10), squares) ||
        checkDiagonal2(parseInt(i / COL, 10), parseInt(i % COL, 10), squares)
      ) {
        return true;
      }
    }
  }
  return false;
}

const Board = (prps) => {
  function renderSquare(i) {
    let hili = false;
    if (prps.hl) {
      for (let j = 0; j < arrHL.length; j += 1) {
        if (i === arrHL[j]) {
          hili = true;
          break;
        }
      }
    }
    return (<Square highlight={hili} value={prps.squares[i]} onClick={() => prps.onClick(i)} />);
  }
  const numbers = [];
  for (let i = 0; i < 400; i += 1) {
    numbers.push(i);
  }
  const list = numbers.map(number => (renderSquare(number)));
  return (<div>

    <div className="board-row">
      {list}
    </div>

  </div>);
}

export default Board
