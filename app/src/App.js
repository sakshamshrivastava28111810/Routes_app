import './App.css';
import { Routes, Route, } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Labs from './Components/Labs';
import NotFound from './Components/NotFound';
import Support from './Components/Support';
import { NavLink } from 'react-router-dom';
import MainHeader from './Components/MainHeader';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><NavLink to="/">Home </NavLink></li>
          <li><NavLink to="/aboutPage">About</NavLink></li>
          <li><NavLink to="/supportPage">Support</NavLink></li>
          <li><NavLink to="/labsPage">Labs</NavLink></li>
          <li><NavLink to="*">Not Found</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home/>} />
          <Route path="/supportPage" element={<Support />}/>
          <Route path="/labsPage" element={<Labs />}/>
          <Route path="/aboutPage" element={<About />}/>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
