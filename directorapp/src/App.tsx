import './App.css';
import { About } from './components/About';
import { Foot } from './components/Footer';
import { Head } from './components/Header';
import { Login } from './components/Login';
import { Main } from './components/Main';
import { Signup } from './components/Signup';
import { ContextProvider } from './context/ContextProvider';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (

    <ContextProvider>
      <Router>
      
    {/* <div className="App"> */}
    <div id="blob"></div>
    <Head/>
    <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    </Routes>
    <Foot/>
    {/* </div> */}
    </Router>
    </ContextProvider>
  );
}

export default App;
