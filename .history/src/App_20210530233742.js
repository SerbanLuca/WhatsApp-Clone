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
            <Sidebar />
            <Route path='/rooms/:roomId'>
              <Chat />
            </Route>
            <Route path='/'>
               <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
