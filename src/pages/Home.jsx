import css from "./Home.module.css"
import BarraLateral from "../components/BarraLateral";

export default function Home(){
    return (
        <div className={css.main + ' container-fluid'}>
            <div className={css.tudo + " row"}>
                <div className={css.barra + ' col-3'}>
                    <BarraLateral></BarraLateral>
                </div>
                <div className={css.meio + ' col-9' }>

                </div>


            </div>
        </div>
    )
}