import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className='app__body'>
        <Router>
          <Switch>
            <Route path='/app'>
              <Sidebar />
              <Chat />
            </Route>
            <Route path='/'>
              <h1>Home Screen</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
