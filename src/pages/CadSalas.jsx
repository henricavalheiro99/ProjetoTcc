import css from "./CadSalas.module.css"
import BarraLateral from "../components/BarraLateral";
import BotaoCriar from "../components/BotaoCriar";

export default function CadSalas(){
    return (
        <div className={css.main + ' container-fluid'}>
            <div className={css.tudo + " row"}>
                <div className={css.barra + ' col-3'}>
                    <BarraLateral></BarraLateral>
                </div>
                <div className={css.meio + ' col-9'}>
                    <div className={css.centro}>
                        <BotaoCriar nome='Cadastro de salas:'></BotaoCriar>
                        <div className={css.conteudo}>
                            <div className={css.campos}>
                                <h2>Nova sala:</h2>
                                <input placeholder={"Tipo da sala"}/>
                                <input placeholder={"Nome / N°"}/>
                                <input placeholder={"Descrição"}/>

                                <button className={css.salvarBotao}>Salvar</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}