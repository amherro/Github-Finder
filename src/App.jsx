import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Alert from "./components/Layout/Alert";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import AboutPage from "./components/pages/AboutPage";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import User from "./components/pages/User";
import { AlertProvider } from "./context/alert/AlertContext";
import { GitHubProvider } from "./context/github/GithubContext";



function App() {
  return (
    <GitHubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GitHubProvider>
  );
}

export default App;
