import { Route, Switch } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Resume } from './components/Resume/Resume';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Resume/:username' render={(props) => <Resume {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
