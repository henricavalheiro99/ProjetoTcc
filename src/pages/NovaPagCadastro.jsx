import { useState } from "react";
import css from './NovaPagCadastro.module.css'
import BarraLateral from "../components/BarraLateral";
import BotaoCriar from "../components/BotaoCriar";
import BtnSalvar from "../components/BtnSalvar";
import InputSalas from "../components/InputSalas";
import InputCadastro from "../components/InputCadastro";
import BtnConfirmar from "../components/BtnConfirmar";

function NovaPagCadastro() {
    const [nome, setNome] = useState('')
    const [nomeCurso, setNomeCurso] = useState('')
    const [descricao, setDescricao] = useState('')
    const [cargaHoraria, setCargaHoraria] = useState('')
    const [user_id, setUser_id] = useState()
    const [lista, setLista] = useState([])

    const url = "http://127.0.0.1:5000/cursos"

    function reunirDados() {
        const dados = {
            nomeCurso,
            descricao,
            cargaHoraria,
            user_id
        }
        let config = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        }

        fetch(url, config)
            .then((dados) => dados.json())
            .then(function (data) {
                setLista(data.curso)
            })
            .catch((erro) => alert(erro))

        alert(dados)
        console.log(dados)
    }

    return (
        <div className={css.main + ' container-fluid'}>
            <div className={css.tudo + " row"}>
                <div className={css.barra + ' col-3'}>
                    <BarraLateral></BarraLateral>
                </div>
                <div className={css.meio + ' col-9'}>
                    <div className={css.divTitle}>
                        <BotaoCriar nome={"Cadastro de Cursos:"}></BotaoCriar>
                    </div>

                    <div className={css.divSubtitle}>
                        <p className={css.subtitle}>Cursos em andamento</p>
                    </div>

                    <div className={css.DivBaixoOne}>
                        <div className={css.CardGigante + " row"}>
                            <div className={css.Cima}>
                                <div className={css.divEsquerdaCima}>
                                    <InputCadastro tipo={"text"} name={"nomeCurso"} placeholder={"Insira o nome do curso"} icone={"fa-user"}
                                                   state={nomeCurso} set={setNomeCurso} margemBottom={"8px"} altura={"42px"} fonte={'20px'}></InputCadastro>

                                    <InputCadastro tipo={"text"} name={"descricao"} placeholder={"Insira a descricção"} icone={"fa-pen"}
                                                   state={descricao} set={setDescricao} margemBottom={"8px"} altura={"42px"} fonte={'20px'}></InputCadastro>

                                    <InputCadastro tipo={"text"} name={"CargaHoraria"} placeholder={"Insira a carga horária"} icone={"fa-clock"}
                                                   state={cargaHoraria} set={setCargaHoraria} margemBottom={"8px"} altura={"42px"} fonte={'20px'}></InputCadastro>

                                    <InputCadastro tipo={"text"} name={"user_id"} placeholder={"Insira o ID do instrutor    "} icone={"fa-university"}
                                                   state={user_id} set={setUser_id} margemBottom={"8px"} altura={"42px"} fonte={'20px'}></InputCadastro>
                                </div>
                            </div>
                            <div className={css.divbtn}>
                                <BtnConfirmar title={"Cadastrar"} action={reunirDados} ></BtnConfirmar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NovaPagCadastro
