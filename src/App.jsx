import { Switch , Route ,BrowserRouter} from 'react-router-dom';
import './App.scss';


import HomePage from './components/homePage';
import About from './components/aboutPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path='/about' component={About}></Route>
        <Route path='/work' component={About}></Route>
        <Route path='/contact' component={About}></Route>
        <Route path='/'  component={HomePage}></Route>
        
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
