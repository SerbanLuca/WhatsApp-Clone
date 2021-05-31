import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat'
import { Router } from 'react-router';

function App() {
  return (
    <div className="app">
      <div className='app__body'>
        <Router>
          <Sidebar />
          <Chat />
        </Router>
      </div>
    </div>
  );
}

export default App;
