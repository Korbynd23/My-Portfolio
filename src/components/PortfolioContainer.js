import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import '../styles/app.css';
import linked from '../images/linked.png'
import gitHub from '../images/github.png'
import stack from '../images/stack.png'


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header className="header">Korbyn Dicari</header>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <br></br>
      <footer className="footer">
        {/* eslint-disable-next-line */}
        <a href="https://www.linkedin.com/in/korbyndicari" target="_blank"><img alt="linkedIn icon" src={linked} width="45px" height="45px" className='icons'></img></a>
        {/* eslint-disable-next-line */}
        <a href="https://www.github.com/Korbynd23" target="_blank"><img alt="GitHub icon" src={gitHub} width="45px" height="45px" className='icons'></img></a>
        {/* eslint-disable-next-line */}
        <a href="https://stackoverflow.com/users/19504905/korbynd23" target="_blank"><img alt="Stack Overflow icon" src={stack} width="45px" height="45px"></img></a>
      </footer>
    </div>
  );
}
