import './TicTacToe.css'
import {useState} from 'react';


const EMPTY = 'EMPTY';
const CIRCLE = 'CIRCLE';
const CROSS = 'CROSS';

const TIE = "It is a tie!";
  
const player=CIRCLE;
const positions = [  
  EMPTY, EMPTY, EMPTY,
  EMPTY, EMPTY, EMPTY,
  EMPTY, EMPTY, EMPTY
];

let initialStateFactory = (player,positions) => {
  return {
    player,
    positions: [...positions]
  }  
}

function App() {  // TicTacToe
  const [state, setState] = useState(initialStateFactory(player,positions)); 

  function makeMove(pos) {
    const temp = [...state.positions];
    temp[pos] = state.player;
    
    setState({
      player: state.player === 'CIRCLE' ? 'CROSS' : 'CIRCLE',
      positions: temp
    })
  }

  const winner = detectWinner(state.positions);

  const reset = () => {
    setState(initialStateFactory(player,positions));
  }

  return (
    <div className="test">
      <h1 className="h"><span className="tic">Tic </span><span className="tac"> Tac</span><span className="toe"> Toe</span></h1>
      <div className="grid">
        <Square position={0} value={state.positions[0]} makeMove={makeMove} />
        <Square position={1} value={state.positions[1]} makeMove={makeMove} />
        <Square position={2} value={state.positions[2]} makeMove={makeMove} />
        <Square position={3} value={state.positions[3]} makeMove={makeMove} />
        <Square position={4} value={state.positions[4]} makeMove={makeMove} />
        <Square position={5} value={state.positions[5]} makeMove={makeMove} />
        <Square position={6} value={state.positions[6]} makeMove={makeMove} />
        <Square position={7} value={state.positions[7]} makeMove={makeMove} />
        <Square position={8} value={state.positions[8]} makeMove={makeMove} />
      </div>
      {winner && <Result winner={winner} reset={reset} />}
    </div>
  );
}

function Result({ winner, reset }) {
  return (
    <div className="result">
      {winner == CIRCLE && 'Circle won the game'}
      {winner == CROSS && 'Cross won the game'}
      {winner == TIE && TIE}
      <button className="button" onClick={reset}><span>Reset</span></button>
    </div>
  );
}

function Square({ position, value, makeMove }) {
  function handleClick() { 
    if(value === EMPTY) makeMove(position)
  }
  
  return (
    <div className="square" onClick={handleClick}>
      {value == CIRCLE && <Circle />}
      {value == CROSS && <Cross />}
    </div>
  )
}

function Circle() {
  return (
    <svg width="100" height="100" viewBox="-50 -50 100 100" className="circle">
      <circle cx="0" cy="0" r="40" />  
    </svg>
  );
}

function Cross() {
  return (
    <svg width="100" height="100" viewBox="-50 -50 100 100" className="cross">
      <line x1="-40" y1="-40" x2="40" y2="40" />  
      <line x1="-40" y1="40" x2="40" y2="-40" />  
    </svg>
  );
}

function detectWinner(p) {
  if(p[0] == CIRCLE && p[1] == CIRCLE && p[2] == CIRCLE) return CIRCLE;
  if(p[3] == CIRCLE && p[4] == CIRCLE && p[5] == CIRCLE) return CIRCLE;
  if(p[6] == CIRCLE && p[7] == CIRCLE && p[8] == CIRCLE) return CIRCLE;

  if(p[0] == CIRCLE && p[3] == CIRCLE && p[6] == CIRCLE) return CIRCLE;
  if(p[1] == CIRCLE && p[4] == CIRCLE && p[7] == CIRCLE) return CIRCLE;
  if(p[2] == CIRCLE && p[5] == CIRCLE && p[8] == CIRCLE) return CIRCLE;

  if(p[0] == CIRCLE && p[4] == CIRCLE && p[8] == CIRCLE) return CIRCLE;
  if(p[2] == CIRCLE && p[4] == CIRCLE && p[6] == CIRCLE) return CIRCLE;

  if(p[0] == CROSS && p[1] == CROSS && p[2] == CROSS) return CROSS;
  if(p[3] == CROSS && p[4] == CROSS && p[5] == CROSS) return CROSS;
  if(p[6] == CROSS && p[7] == CROSS && p[8] == CROSS) return CROSS;

  if(p[0] == CROSS && p[3] == CROSS && p[6] == CROSS) return CROSS;
  if(p[1] == CROSS && p[4] == CROSS && p[7] == CROSS) return CROSS;
  if(p[2] == CROSS && p[5] == CROSS && p[8] == CROSS) return CROSS;

  if(p[0] == CROSS && p[4] == CROSS && p[8] == CROSS) return CROSS;
  if(p[2] == CROSS && p[4] == CROSS && p[6] == CROSS) return CROSS;
  
  if(p.every(position => position != EMPTY)) return TIE;
}
  

export default App;


/*


*/






  