import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Profile from "./components/Profile/Profile";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";

function App() {
  /*there needs to be a useEffect here to check for if there is a user 
  session still valid in the backend to update the user store variable
  just in case the user refreshes the page*/
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
