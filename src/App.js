import logo from './logo.svg';
import React from 'react';
import './App.css';
import Intro from './components/intro'
import Contact from './components/contact'
import Footer from './components/footer'
import Header from './components/header'
import Home from './components/home'
import Portfolio from './components/portfolio'
import Resume from './components/resume'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Sets up the routing for the site for example when the url ends with /portfolio it will import Portfolio into the page
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
      <Route path = '/home' element = {<Home />} />
      <Route path = '/' element = {<Intro />} />
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


