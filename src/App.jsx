import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import AboutPage from "./components/pages/AboutPage";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";


function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
          
      </div>
    </Router>
  );
}

export default App;
