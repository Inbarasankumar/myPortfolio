import {BrowserRouter} from 'react-router-dom';
import './App.scss';


import HomePage from './components/homePage';
import Wrapper from './components/wrapper';
import MenuItem from './components/menuItem';

function App() {
  return (
    <BrowserRouter>
    <div className="App">  
    <MenuItem></MenuItem>
    <HomePage></HomePage>
    <Wrapper></Wrapper>
    </div>
    </BrowserRouter>
  );
}

export default App;
