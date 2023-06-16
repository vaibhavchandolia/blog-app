import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Single from "./Pages/Single/Single";
import Topbar from "./Components/Topbar/Topbar";
import Write from './Components/Write/Write';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Settings from './Pages/Settings/Settings';
import Home from './Pages/Home/Home';



function App() {
  const user = false;

  return (
    <div className="App">
      <Router>
        <Topbar />
        <Routes>
          <Route path="/settings" element={user ? <Settings/> : <Register/>}/>
          <Route path="/write" element={user ? <Write/> : <Register/>}/>
          <Route path="/login" element={user ? <Single/> : <Login />}/>
          <Route path="/signup" element={user ? <Single/> : <Register/>}/>
          <Route path="/" element={<Home />}/>
          <Route path="/blog" element={<Single />}/>
          <Route path="/writes" element={<Settings />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
