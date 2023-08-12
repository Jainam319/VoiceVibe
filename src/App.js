import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Navigation from '../src/components/shared/Navigation/navigation';
import Register from './pages/Register/register';
import Login from './pages/Login/login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/register' exact element={<Register />}></Route>
          <Route path='/login' exact element={< Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
