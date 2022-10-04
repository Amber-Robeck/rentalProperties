import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './pages/home/Homepage.js';
import Login from './pages/login/Login.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />} />
            <Route path="login" element={<Login />} />
          </Route >

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
