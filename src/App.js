import './App.css';
import Bank from './components/Bank';
import Clicker from './components/Clicker';
import Shop from './components/Shop';

function App() {
  return (
    <div className="app">
      <div className='app-header'>
        <h1>Idle Clicker Game</h1>
      </div>

      <div className='app-main'>
        <div className='app-section'><Bank /></div>
        <div className='app-section'><Clicker /></div>
        <div className='app-section'><Shop /></div>
      </div>

      <div className='app-footer'>
        <h2><u>Crazy Game</u></h2>
      </div>
    </div>
  );
}

export default App;
