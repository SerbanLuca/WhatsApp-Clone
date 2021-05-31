import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat'
import { Route, Router, Switch } from 'react-router';

function App() {
  return (
    <div className="app">
      <div className='app__body'>
        <Router>
          <Switch>
            <Route path='/'>
              <h1>Home screen</h1>
            </Route>
            <Sidebar />
            <Chat />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
