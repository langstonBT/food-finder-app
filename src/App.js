import React from "react"
import './Styles/App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.js";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import Ingredients from "./pages/ingredients";

function App() {
  return (
    <div className="App">
      <Router>
            <Navbar />
            <div className="main-content">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route path="/blogs" element={<Blogs />} />
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                />
                <Route
                    path="/ingredients"
                    element={<Ingredients />}
                />
            </Routes>
            </div>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
