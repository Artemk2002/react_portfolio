import React from 'react';
import './App.css';
import PortfolioContainer from './components/PortfolioContainer'
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <PortfolioContainer />
      <Footer />
    </div>
  );
}
export default App;