import Cadastro from './pages/Cadastro.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import EdicaoPerfil from "./pages/EdicaoPerfil";
import CadastroTurmas from "./pages/CadastroTurmas";
import CadastroUsuarios from "./pages/CadastroUsuarios";
import Home from "./pages/Home";
import CadSalas from "./pages/CadSalas";
import NovaPagCadastro from "./pages/NovaPagCadastro";
import Cadastrocursos from "./pages/Cadastrocursos";
import Turmas from "./pages/Turmas";
import CadastrarTurmas from "./pages/CadastrarTurmas";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/login" element={<Login />}/>
              <Route path="/cadastro" element={<Cadastro />}/>
              <Route path="/edicao" element={<EdicaoPerfil/>}/>
              <Route path="/usuarios" element={<CadastroUsuarios/>}/>
              <Route path="/cadTurmas" element={<CadastroTurmas/>}/>
              <Route path="/cadastrarTurmas" element={<CadastrarTurmas/>}/>
              <Route path="/turmas" element={<Turmas/>}/>
              <Route path="/home" element={<Home />}/>
              <Route path="/cadSalas" element={<CadSalas />}/>
              <Route path="/cursos" element={<Cadastrocursos/>}/>
              <Route path="/cadCursos" element={<NovaPagCadastro/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
