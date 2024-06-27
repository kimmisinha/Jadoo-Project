import React from 'react';
import './App.css';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Travel from './components/Travel/Travel';
import Category from './components/Category /Category';
import TopSelling from './components/TopSelling/TopSelling';
import EasyandFast from './components/EasyandFast/EasyandFast';
import Testimonials from './components/Testimonials/Testimonials';
import Companyname from './components/Companyname/Companyname.jsx';
import Email from './components/Email/Email';
import Footer from "./components/Footer/Footer.jsx"
function App() {
  return (
    <div>
      <Header/>
       <Travel/>
       <Category/>
       <TopSelling/>
       <EasyandFast/>
       {/* <Testimonials/> */}
       <Companyname/>
       <Email/>
       <Footer/>
    </div>
  );
}

export default App;
