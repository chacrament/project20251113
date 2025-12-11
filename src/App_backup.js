import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Garage from './Garage';
import HelloBtn from './HelloBtn';
import HelloBtn2 from './HelloBtn2';
import HelloBtn3 from './HelloBtn3';
import UseStateTest from './components/UseStateTest';
import UseStateTest2 from './components/UseStateTest2';
import Timer from './components/Timer';
import RefTest from './components/RefTest';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RefTest />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit~~!! <code>src/App.js</code> and save to reload.
        </p>

        <Hello name="1234"/>
        <Garage />

        <HelloBtn />
        <HelloBtn2 />
        <HelloBtn3 />
        <UseStateTest />
        <UseStateTest2 />
        <Timer />
        

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
