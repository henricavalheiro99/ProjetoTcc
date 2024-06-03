import css from "./Turmas.module.css"
import BarraLateral from "../components/BarraLateral";
import BotaoCriar from "../components/BotaoCriar";
import CardTurmas from "../components/CardTurmas";
import CardCursos from "../components/CardCursos";
import {useEffect, useState} from "react";
export default function Turmas(){
    const [turmas,setTurmas] = useState([])
    const [url,setUrl] = useState("http://127.0.0.1:5000/turmas")
    useEffect(() => {
        mostraTurmas()
    }, []);
    async function mostraTurmas(){
        let config = {
            methods: 'GET',
            headers: {
                "Content-Type":"application/json"
            }
        }
        fetch(url, config)
            .then((dados)=>dados.json())
            .then(function (data) {
                setTurmas([...data.turmas])
            })
            .catch((erro) =>alert(erro))
    }
    return(
      <div className={css.main + " container-fluid"}>
          <div className={css.tudo + " row"}>
              <div className={css.barra + ' col-3'}>
                  <BarraLateral></BarraLateral>
              </div>
              <div className={css.turmas + ' col-9'}>
                  <div className={css.divTitle}>
                    <BotaoCriar nome={"Cadastrar Turma:"} redirect={"/cadastrarTurmaims"}></BotaoCriar>
                  </div>

                  <div className={css.divSubtitle}>
                      <p className={css.subtitle}>Cursos em andamento</p>
                  </div>

                  <div className={css.divCards + " row"}>
                      {turmas.map((obj,index) => (
                          <CardTurmas key={index} numero={obj.turma_id} curso={obj.nomeDaTurma} sala={obj.sala_id}
                                      dia={obj.inicioAulas} hora={obj.finalAulas} professor={obj.nomeUsuario}></CardTurmas>
                      ))}
                  </div>
              </div>
          </div>
      </div>
    );
}