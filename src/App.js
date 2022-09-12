import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import {useState} from "react";
import {signOut} from "firebase/auth"
import { auth } from './firebase-confic';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
 
  const signUserOut  = () => {
    signOut(auth).then(()=>{
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = "/login";
    })
  }
 
  return (
    <div className="App">
      <Router>
      <nav>
        <Link to="/">Home</Link>
        {!isAuth ? (<Link to="/login">Login</Link>) : (<> <Link to="/post">Create Post</Link> <button onClick={signUserOut }> Log Out</button></>)}
       
      </nav>
        <Routes>
          <Route path='/' element={<Home isAuth={isAuth} />} />
          <Route path='/post' element={<Post isAuth={isAuth} />}/>
          <Route path='/login' element={<Login setIsAuth={setIsAuth} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
