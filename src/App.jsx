import React from 'react'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes , BrowserRouter as Router , Route} from 'react-router-dom';
import ContactForm from './Form';
import Home from './Home';

const App = () => {
  return (
  
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<ContactForm />} />

        </Routes>
      </Router>
   
  )
}

export default App