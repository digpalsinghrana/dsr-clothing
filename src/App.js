import Homepage from './pages/homepage/Homepage.component';
import {Route} from 'react-router-dom';
import './App.css';


const HatsPage = () => (
  <div>
    <h1>HATSPAGE</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Homepage} />
      <Route path='/hats' component={HatsPage} />
    </div>
  );
}

export default App;
