import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Download from './pages/Download';
import Link from './pages/Link';

function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Download} />
        <Route path="/link" component={Link} />
      </Switch>
    </Router>
  );
}

export default App;
