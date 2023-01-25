
import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';
import Split from 'react-split';
import SideTasks from './components/SideTasks';
function App() {

  return (

    <>
      <Header />
      <Split
        sizes={[30, 70]}
        direction="horizontal"
        className="split"
        cursor='col-resize'
        gutterSize={50}
        >
        <SideTasks />
        <Main />
      </Split>
      <Footer />
        </>




  );
}

export default App;
