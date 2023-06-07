
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { CardsDetails } from './components/CardsDetails';
import { Cards } from './components/Cards';
import {Routes,Route} from "react-router-dom";
import Home from './compon/Home';
import Login from './compon/Login';
import { Details } from '@mui/icons-material';

// import { Home } from './Home';


function App() {
  return (
    <div className="App">
      {/* <Home/> */}
    {/* <Header/> */}
    <Routes>
      {/* <Route path="/" element={<Home/>}/> */}
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      {/* <Route path='*' element={<Errror />} /> */}

      <Route path='/cpage' element={<Cards/>}/>
      <Route path='/cart/:id' element={<CardsDetails/>}/>
    </Routes>
    </div>
  );
}

export default App;