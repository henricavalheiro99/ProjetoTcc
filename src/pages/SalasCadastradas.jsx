import css from "./SalasCadastradas.module.css"
import BarraLateral from "../components/BarraLateral";
import BotaoCriar from "../components/BotaoCriar";
import CardSalas from "../components/CardSalas";

export default function SalasCadastradas(){
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
                        <CardSalas numero={"22"} descricao={"Sala de TI"}></CardSalas>
                        <CardSalas numero={"24"} descricao={"Sala Comum voltada a aulas didaticas "}></CardSalas>
                        <CardSalas numero={"24"} descricao={"Sala Comum voltada a aulas didaticas "}></CardSalas>
                        <CardSalas numero={"24"} descricao={"Sala Comum voltada a aulas didaticas "}></CardSalas>
                        <CardSalas numero={"24"} descricao={"Sala Comum voltada a aulas didaticas "}></CardSalas>
                        <CardSalas numero={"24"} descricao={"Sala Comum voltada a aulas didaticas "}></CardSalas>
                    </div>
                </div>
            </div>
        </div>
    );
}