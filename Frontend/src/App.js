import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Navigation from '../src/components/shared/Navigation/navigation';
import Authenticate from './pages/Authenticate/authenticate';
import { useState } from 'react';
import GuestRoute from './components/ProtectedRoute';
import Room from './pages/Rooms/rooms';
import Activate from './pages/Activate/activate';
import Demo from './pages/Demo/demo';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={
            <GuestRoute isAuth={isAuth}>
              <Home />
            </GuestRoute>
          } />

          <Route path='/authenticate/*' element={
            <GuestRoute isAuth={isAuth}>
              <Authenticate />
            </GuestRoute>
          } />

          {/* I have to fix this also suppose someone is direct enter /rooms then they can enter on the rooms page   */}
          {/* <Route path='/rooms' exact element={<Room />}></Route> */}
          <Route path='/demo' exact element={<Demo />}></Route>

          <Route path='/activate' element={
            <SemiProtectedRoute isAuth={isAuth}>
                <Activate />
            </SemiProtectedRoute>
          } />

          <Route path='/rooms' element={
            <ProtectedRoute isAuth={isAuth}>
              <Room/>
            </ProtectedRoute>
          } />

          {/* <Route path='/activate' element={<Activate />}></Route> */}
        </Routes>

      </BrowserRouter>
    </>
  );
}

// Verify that the user is Authorized and if the user also pass through the otp and the Avatar then we will give permission to go to the Rooms 
// If the user is Authorized but not activated then we will pass to activated
// /activate means profile page 

const user = {
  activated: false
}

const SemiProtectedRoute = ({ isAuth, children, ...rest }) => {
  return (
    (!isAuth) ?
      (
        <Navigate to={{
          pathname: '/',
          state: { from: rest.location }
        }} />
      ) : isAuth && !user.activated ?
        (children) : <Navigate to={{
          pathname: '/demo',    // at this point of time i will pass to the otp page and then avatar page  means profile upper pass krsu
          state: { from: rest.location }
        }} />
  )
}

const ProtectedRoute = ({ isAuth, children, ...rest }) => {
  return (
    (!isAuth) ?
      (
        <Navigate to={{
          pathname: '/',
          state: { from: rest.location }
        }} />
      ) : isAuth && !user.activated ?
        (<Navigate to={{
          pathname: '/activate',
          state: { from: rest.location }
        }} />) : (children)
  )
}

export default App;
