import {useRef, useState, StyleSheet, useEffect} from "react";
import css from './CadastroCurso.module.css'
import BarraLateral from "../components/BarraLateral";
import BotaoCriar from "../components/BotaoCriar";
import CardCursos from "../components/CardCursos";

function Cadastrocursos(){
    const [cursos,setCursos] = useState([])
    const [url,setUrl] = useState("http://127.0.0.1:5000/curso")
    useEffect(() => {
        mostraCursos()
    }, []);
    async function mostraCursos(){
        let config = {
            methods: 'GET',
            headers: {
                "Content-Type":"application/json"
            }
        }
        fetch(url, config)
            .then((dados)=>dados.json())
            .then(function (data) {
                setCursos([...data.cursos])
            })
            .catch((erro) =>alert(erro))
    }

    console.log(cursos)
    return (
        <div className={css.main + ' container-fluid'}>
            <div className={css.tudo + " row"}>
                <div className={css.barra + ' col-3'}>
                    <BarraLateral></BarraLateral>
                </div>
                <div className={css.meio + ' col-9'}>
                    <div className={css.divTitle}>
                        <BotaoCriar nome={"Cadastrar Turma:"}></BotaoCriar>
                    </div>

                    <div className={css.divSubtitle}>
                        <p className={css.subtitle}>Cursos em andamento</p>
                    </div>

                    <div className={css.divCards + " row"}>
                        {cursos.map((obj,index) => (
                            <CardCursos key={index} title={obj.nomeCurso} subtitle={obj.descricao} btn={"Saiba Mais"}></CardCursos>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cadastrocursos;