import logo from './logo.svg';
import './App.css';
import './components/Card.js'
import Card from "./components/Card";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                    <Card/>
                </a>
                <div>
                    <h1>Test</h1>
                    <li>1</li>
                </div>
            </header>
        </div>
    );
}

export default App;
