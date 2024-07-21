import logo from './logo.svg';
import './App.css';
import Login from './components/auth2/Login';
import Register from './components/auth2/Register'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import FileUpload from './components/docs_management/FileUpload';
import FolderCreation from './components/docs_management/FolderCreation'; 
import FolderList from './components/docs_management/FolderList'; 
import { Link } from 'react-router-dom';


  function App() {
    const [userstate, setUserState] = useState({
      });
  
    return (
      <div className="App">
        <Router>
          <nav>
          <ul>
            {userstate && userstate._id ? (
              <>
                <li><Link to="/upload">Upload File</Link></li>
                <li><Link to="/create-folder">Create Folder</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Register</Link></li>
              </>
            )}
          </ul>
          </nav>
          <Routes>
          <Route
            path="/"
            element={
              userstate && userstate._id ? (
                <FolderList />
              ) : (
                <Login setUserState={setUserState} />
              )
            }
          ></Route>
          <Route
            path="/login"
            element={<Login setUserState={setUserState} />}
          ></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/upload" element={<FileUpload />}></Route>
          <Route path="/create-folder" element={<FolderCreation />}></Route>
        </Routes>
        </Router>
      </div>
    );
  }

export default App;
