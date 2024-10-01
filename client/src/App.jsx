import "./App.css";
import Header from './components/header/Header';
import Signin from "./components/registration/Signin";
import{Router as BrowserRouter, Route, Router, Routes}


function App() {
  return (
    <div>
      <Header />
      <Signin />
   
    </div>
  );
}

export default App;
