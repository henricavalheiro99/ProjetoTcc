import css from "./CadSalas.module.css"
import BarraLateral from "../components/BarraLateral";
import BotaoCriar from "../components/BotaoCriar";
import InputSalas from "../components/InputSalas";
import BtnSalvar from "../components/BtnSalvar";
import {useState} from "react";
import BtnDireita from "../components/BtnDireita";
export default function CadSalas(){
    const [tipo,setTipo] = useState([])
    const [descricao,setDescricao] = useState([])

    const [sala,setSala] = useState([])
    function reunirDados (){
        const url = "http://127.0.0.1:5000/salas"
        const dados = {
            tipo,
            descricao
        }

        let config = {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(dados)
        }

        fetch(url, config)
            .then((dados)=>dados.json())
            .then(function (data) {
                setSala(data.Salas)
            })
            .catch((erro) =>alert(erro))
    }
    return (
        <div className={css.main + ' container-fluid'}>
            <div className={css.tudo + " row"}>
                <div className={css.barra + ' col-3'}>
                    <BarraLateral></BarraLateral>
                </div>
                <div className={css.meio + ' col-9'}>
                    <div className={css.centro}>
                        <p className={css.titulasso}>Cadastro de salas:</p>
                        <div className={css.alinharconteudo}>
                            <div className={css.conteudo}>
                                <div className={css.campos}>
                                    <h2 className={css.title}>Nova sala:</h2>
                                    <InputSalas set={setTipo} placeholder={'Insira o tipo da sala'}   state={tipo} texto={"Tipo de sala"}></InputSalas>
                                    <InputSalas set={setDescricao} placeholder={'Insira o descrição da sala'}   state={descricao} texto={"Descrição"}></InputSalas>
                                    <BtnDireita title={"Cadastrar"} action={reunirDados}></BtnDireita>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}