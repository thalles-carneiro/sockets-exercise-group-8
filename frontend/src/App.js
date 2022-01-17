import React from "react";
import Header from './components/Header';
import SideMenu from "./components/SideMenu";
import Container from "./components/Container";
import Square from "./components/Square";
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <SideMenu />
        <Container>
          <Square />
        </Container>
      </main>
    </>
  );
}

export default App;
