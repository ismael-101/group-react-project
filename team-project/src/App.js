import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Blog from "./components/Blog";
import myProfile from "./components/myProfile";
import SearchProvider from "./Context/SearchProvider";
import Register from "./components/Register";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <div className="App">
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<LandingPage />} />
              <Route path="blog" element={<Blog />} />
              <Route path="myProfile" element={<myProfile />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
           
            
            
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </div>
  );
}

export default App;
