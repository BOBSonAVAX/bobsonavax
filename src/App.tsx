import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}></Route>

        </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
