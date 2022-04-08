import React, { useState } from 'react';
import './App.css';



import About from './components/About';
import ContactForm from './components/Contact'
import Resume from './components/Resume'
import NavTabs from './components/NavTabs'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'


function App() {

  const [currentPage, setCurrentPage] = useState('About')

  function newPage() {
    switch (currentPage) {
      case 'Contact':
        return <ContactForm />

      case 'Resume':
        return <Resume />
      case 'Portfolio':
        return <Portfolio />

      default:
        return <About />
    }
  }
  return (
    <div>
      <NavTabs currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div>
        {


        }<div>{newPage(currentPage)}</div>
      </div>
      <Footer></Footer>
    </div>

  )
}

export default App;
