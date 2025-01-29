import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CommonRoutes from './Routers/CommonRoute';
import Navbar from '../src/Components/Navbar/Navbar'
import Footer from "../src/Components/Footer/Footer"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <Navbar/>
 <CommonRoutes/>
 <Footer/>
 </>
);


