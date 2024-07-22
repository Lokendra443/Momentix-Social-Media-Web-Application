import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Message from './pages/Message/Message';
import Authentication from './pages/Authentication/Authentication';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfileAction } from './Redux/Auth/auth.action';


function App() {

  const {auth} = useSelector(store => store)

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  useEffect(() =>{
      dispatch(getProfileAction(jwt))
  },[jwt])



  return (
    <div className="">

      <Routes>
        
        <Route path="/*" element={auth.user ? <HomePage/> :  <Authentication/>} />
        <Route path="/message" element={<Message/>} />
        <Route path="/*" element={<Authentication/>} />

      </Routes>

      
      
      
    </div>
  );
}

export default App;
