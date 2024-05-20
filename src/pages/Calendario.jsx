import css from "./Calendario.module.css"
import BarraLateral from "../components/BarraLateral";
import CalendarioComponente from "../components/CalendarioComponente";

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

                    <div className={css.divCalendario}>
                        <CalendarioComponente></CalendarioComponente>
                    </div>
                </div>
            </div>
        </div>
    )
}