import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Profile from "./components/Profile/Profile";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";

function App() {
  const [user, setUser] = useState<User>();

  return (
    <>
      <Router>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
