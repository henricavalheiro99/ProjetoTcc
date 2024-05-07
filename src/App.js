import Cadastro from './pages/Cadastro.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import CadastroTurmas from "./pages/CadastroTurmas";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/cadastroTurmas" element={<CadastroTurmas  />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/cadastro" element={<Cadastro />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
