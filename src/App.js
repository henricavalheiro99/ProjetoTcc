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
import SalasCadastradas from "./pages/SalasCadastradas";
import CadastrarTurmas from "./pages/CadastrarTurmas";
import Calendario from "./pages/Calendario";
import {useState} from "react";
import PagErro from "./pages/PagErro";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/cadastro" element={<Cadastro />}/>
              <Route path="/edicao" element={<EdicaoPerfil/>}/>
              <Route path="/usuarios" element={<CadastroUsuarios/>}/>
              <Route path="/cadastrarTurmas" element={<CadastrarTurmas/>}/>
              <Route path="/alunosTurmas" element={<CadastroTurmas/>}/>
              <Route path="/turmas" element={<Turmas/>}/>
              <Route path="/home" element={<Home />}/>
              <Route path="/cadSalas" element={<CadSalas />}/>
              <Route path="/salasCadastradas" element={<SalasCadastradas/>}/>
              <Route path="/cursos" element={<Cadastrocursos/>}/>
              <Route path="/cadCursos" element={<NovaPagCadastro/>}/>
              <Route path="/calendario" element={<Calendario/>}/>
              <Route path="/*" element={<PagErro/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
