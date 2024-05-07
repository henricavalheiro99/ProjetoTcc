import css from "./CadastroTurmas.module.css"
import BarraLateral from "../components/BarraLateral";

export default function CadastroTurmas(){
    return (
        <div className={css.main + ' container-fluid'}>
            <div className={css.tudo + " row"}>
                <div className={css.barra + ' col-3'}>
                    <BarraLateral></BarraLateral>
                </div>
                <div className={css.addTurmas + ' col-9'}>

                </div>
            </div>
        </div>
    );
}