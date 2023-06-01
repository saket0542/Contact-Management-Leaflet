import React from "react";
import { Route,Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Chart from "./components/Chart";
import Map from "./components/Map";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <NavBar />
      <Routes>
      <Route exact path="/" element={<Home/>} /> {/* Provide the Home component */}
      <Route exact path="/add" element={<AddPost/>} />
      <Route exact path="/edit/:id" element={<EditContact/>} />
      <Route exact path="/charts" element={<Chart/>}/>
      <Route exact path="/map" element={<Map/>}/>
      </Routes>
    </div>
  );
};

export default App;
