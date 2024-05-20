import css from "./Turmas.module.css"
import BarraLateral from "../components/BarraLateral";
import BotaoCriar from "../components/BotaoCriar";
import CardTurmas from "../components/CardTurmas";
export default function Turmas(){
    return(
      <div className={css.main + " container-fluid"}>
          <div className={css.tudo + " row"}>
              <div className={css.barra + ' col-3'}>
                  <BarraLateral></BarraLateral>
              </div>
              <div className={css.turmas + ' col-9'}>
                  <div className={css.divTitle}>
                    <BotaoCriar nome={"Cadastrar Turma:"}></BotaoCriar>
                  </div>

                  <div className={css.divSubtitle}>
                      <p className={css.subtitle}>Cursos em andamento</p>
                  </div>

                  <div className={css.divCards + " row"}>
                      <CardTurmas numero={"1"} curso={"Redes"} sala={"22"}
                      dia={"22/06/24"} hora={"17:00"} professor={"Fernando"}></CardTurmas>

                      <CardTurmas numero={"2"} curso={"IA"} sala={"20"}
                      dia={"13/06/24"} hora={"19:00"} professor={"Saruel"}></CardTurmas>

                      <CardTurmas numero={"2"} curso={"IA"} sala={"20"}
                                  dia={"13/06/24"} hora={"19:00"} professor={"Saruel"}></CardTurmas>

                      <CardTurmas numero={"2"} curso={"IA"} sala={"20"}
                                  dia={"13/06/24"} hora={"19:00"} professor={"Saruel"}></CardTurmas>
                  </div>
              </div>
          </div>
      </div>
    );
}