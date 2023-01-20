import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage";
import RedirectHandler from "./auth/RedirectHandler";
import NavBar from "./components/NavBar";
import PermissionsPage from "./pages/PermissionsPage";

function App() {
  return (
      <div>
          <BrowserRouter>
              <NavBar/>
              <Routes>
                  <Route path="/" exact element={<HomePage/>}/>
                  <Route path="/home" exact element={<HomePage/>}/>
                  <Route path="/callback" element={<RedirectHandler/>}/>
                  <Route path="/permissions" element={<PermissionsPage/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
