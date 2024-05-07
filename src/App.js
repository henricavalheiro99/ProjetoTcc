import Cadastro from './pages/Cadastro.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/login" element={<Login />}/>
              <Route path="/cadastro" element={<Cadastro />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
