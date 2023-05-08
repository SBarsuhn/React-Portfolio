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


// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
// WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default
// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them
// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 
