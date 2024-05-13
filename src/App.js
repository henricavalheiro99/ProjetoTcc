import Cadastro from './pages/Cadastro.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import EdicaoPerfil from "./pages/EdicaoPerfil";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/login" element={<Login />}/>
              <Route path="/cadastro" element={<Cadastro />}/>
              <Route path="/edicao" element={<EdicaoPerfil/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
