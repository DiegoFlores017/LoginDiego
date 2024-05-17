import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './App.jsx'
import SignInSide from './SignInSide.tsx'
import { BrowserRouter as Router} from 'react-router-dom'
import Holamundo from './Holamundo.jsx'
import { Formik } from 'formik';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    < App />
  </Router>
)
