import css from "./SalasCadastradas.module.css"
import BarraLateral from "../components/BarraLateral";
import BotaoCriar from "../components/BotaoCriar";
import CardSalas from "../components/CardSalas";
import {useEffect, useState} from "react";
import CardTurmas from "../components/CardTurmas";

export default function SalasCadastradas(){
    const [salas,setSalas] = useState([])
    const [url,setUrl] = useState("http://127.0.0.1:5000/salas")
    useEffect(() => {
        mostraSalas()
    }, []);
    async function mostraSalas(){
        let config = {
            methods: 'GET',
            headers: {
                "Content-Type":"application/json"
            }
        }
        fetch(url, config)
            .then((dados)=>dados.json())
            .then(function (data) {
                setSalas([...data.salas])
            })
            .catch((erro) =>alert(erro))
    }
    return (
        <div className={css.main + " container-fluid"}>
            <div className={css.tudo + " row"}>
                <div className={css.barra + ' col-3'}>
                    <BarraLateral></BarraLateral>
                </div>
                <div className={css.turmas + ' col-9'}>
                    <div className={css.divTitle}>
                        <BotaoCriar nome={"Cadastro de Salas:"} redirect={"/cadSalas"}></BotaoCriar>
                    </div>

                    <div className={css.divCards + " row"}>
                        {salas.map((obj,index) => (
                            <CardSalas nome={obj.tipo} numero={obj.numeroDaSala} descricao={obj.descricao}></CardSalas>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}