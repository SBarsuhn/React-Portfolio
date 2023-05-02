import logo from './logo.svg';
import './App.css';
import Contact from './components/contact'
import Footer from './components/footer'
import Header from './components/header'
import Home from './components/home'
import Portfolio from './components/portfolio'
import Resume from './components/resume'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/portfolio' element = {<Portfolio />} />
      <Route path = '/contact' element = {<Contact />} />
      <Route path = '/resume' element = {<Resume />} />
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
