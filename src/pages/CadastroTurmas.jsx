import css from "./CadastroTurmas.module.css"
import BarraLateral from "../components/BarraLateral";
import BotaoCriar from "../components/BotaoCriar";
import SelecAluno from "../components/SelecAluno";
import InputSearch from "../components/InputSearch";
import CardTurmas from "../components/CardTurmas";
import {useEffect, useState} from "react";

export default function CadastroTurmas(){
    const [alunos,setAlunos] = useState([])
    const [url,setUrl] = useState("http://127.0.0.1:5000/usuarios")
    useEffect(() => {
        mostraAlunos()
    }, []);
    async function mostraAlunos(){
        let config = {
            methods: 'GET',
            headers: {
                "Content-Type":"application/json"
            }
        }
        fetch(url, config)
            .then((dados)=>dados.json())
            .then(function (data) {
                console.log(data.usuarios)
                setAlunos([...data.usuarios])
            })
            .catch((erro) =>alert(erro))
    }
    return (
        <div className={css.main + ' container-fluid'}>
            <div className={css.tudo + " row"}>
                <div className={css.barra + ' col-3'}>
                    <BarraLateral></BarraLateral>
                </div>
                <div className={css.addTurmas + ' col-9'}>
                    <div className={css.divtitulo}>
                        <p className={css.CadTurma + ' m-0'}>Cadastro de Turmas</p>
                    </div>
                    <div className={css.listaAlunos}>
                        <div className={css.pesquisa + ' col-12'}>
                            <p className={" m-0"}>Alunos</p>
                            <div className={' w-50'}>
                                <InputSearch></InputSearch>
                            </div>
                        </div>
                        <div className={css.divAlunos + ' col-12'}>
                            {alunos.map((obj, index) => (
                                obj.funcao === 2 ? (
                                    <SelecAluno key={index} imagem={obj.img} nomeAluno={obj.nome} />
                                ) : console.log(obj.img)
                            ))}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}