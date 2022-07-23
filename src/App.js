import './App.css'
import TicTacToe from './Other Apps/TicTacToe.js';
import CountDown from './Other Apps/CountDownToDate.js'
import ContactManager from './Other Apps/ContactManagerRedux.js'

function App() {
  return (
    <div className='Apps'>
      <TicTacToe  />
      <CountDown />
      <ContactManager />
    </div>  
  )
}

export default App;