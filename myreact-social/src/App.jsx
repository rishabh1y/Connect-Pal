// import Home from "./pages/home/Home";
// import PersonIcon from '@mui/icons-material/Person';
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile';
import "./pages/home/home.css";
import Login from "../src/pages/login/Login"
import Register from "./pages/register/Register"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
 
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Messenger from './pages/messenger/Messenger';


function App() {
  const {user} = useContext(AuthContext)
  return (
     <Router>
      <Routes>
        <Route path='/' element={user ? <Home /> : <Register/>} />
        <Route path='/login' element={user ? <Navigate replace to="/"/> : <Login/>}/>
        <Route path='/register' element={user ?  <Navigate replace to="/"/> : <Register/>} />
        <Route path='/messenger' element={!user ?  <Navigate replace to="/"/> : <Messenger/>} />
        <Route path='/profile/:username' element={<Profile/>} />
      </Routes>
     </Router>
   
  );
}

export default App;
