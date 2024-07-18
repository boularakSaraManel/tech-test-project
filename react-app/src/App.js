import logo from './logo.svg';
import './App.css';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';



function App() {
  return (
    <div className="App">
        <header className="App-header">
            <h1>Welcome to Your App</h1>
        </header>
        <main>
            <Login /> {/* Render Login component */}
            <Register />
        </main>
    </div>
);
}

export default App;
