import css from "./Calendario.module.css"
import BarraLateral from "../components/BarraLateral";

export default function Calendario(){
    return (
        <div className={css.main + ' container-fluid'}>
            <div className={css.tudo + " row"}>
                <div className={css.barra + ' col-3'}>
                    <BarraLateral></BarraLateral>
                </div>
                <div className={css.meio + ' col-9'}>
                    <div className={css.divtitle + " row"}>
                        <p className={css.title}>Calendário Anual:</p>
                    </div>
                </div>
            </div>
        </div>
    )
}