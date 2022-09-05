import HomePage from './pages/HomePage';
import Beers from '../src/components/beers'
import RandomBeer from '../src/components/random-beer'
import NewBeer from '../src/components/new-beer'
import Details from './components/beerdetalhe';
import './App.css';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={<HomePage/>}  />
        <Route path='/InfoPages/beers' element={<Beers/>}/>
        <Route path='/InfoPages/randombeer' element={<RandomBeer/>}/>
        <Route path='/InfoPages/newbeer' element={<NewBeer/>}/>
        <Route path='/detalhes/:id' element={<Details/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
