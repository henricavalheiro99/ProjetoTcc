import Cadastro from './pages/Cadastro.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import EdicaoPerfil from "./pages/EdicaoPerfil";
import CadastroTurmas from "./pages/CadastroTurmas";
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/login" element={<Login />}/>
              <Route path="/cadastro" element={<Cadastro />}/>
              <Route path="/edicao" element={<EdicaoPerfil/>}/>
              <Route path="/home" element={<CadastroTurmas/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
