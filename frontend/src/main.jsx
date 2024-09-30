import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Home from './routes/Home'
import RecipePage from './routes/RecipePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/recipe" element={<RecipePage />} />
      </Routes>
    </Router>
  </StrictMode> 
)
