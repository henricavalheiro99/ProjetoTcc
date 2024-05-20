import css from "./CadastroTurmas.module.css"
import BarraLateral from "../components/BarraLateral";
import BotaoCriar from "../components/BotaoCriar";
import SelecAluno from "../components/SelecAluno";
import InputSearch from "../components/InputSearch";

export default function CadastroTurmas(){
    return (
        <div className={css.main + ' container-fluid'}>
            <div className={css.tudo + " row"}>
                <div className={css.barra + ' col-3'}>
                    <BarraLateral></BarraLateral>
                </div>
                <div className={css.addTurmas + ' col-9'}>
                    <div className={css.divtitulo}>
                        <p className={css.CadTurma + ' m-0'}>Cadastro de Turmas</p>
                    </div>
                    <div className={css.listaAlunos}>
                        <div className={css.pesquisa + ' col-12'}>
                            <p className={" m-0"}>Alunos</p>
                            <div className={' w-50'}>
                                <InputSearch></InputSearch>
                            </div>
                        </div>
                        <div className={css.divAlunos + ' col-12'}>
                            <SelecAluno></SelecAluno>
                            <SelecAluno></SelecAluno>
                            <SelecAluno></SelecAluno>
                            <SelecAluno></SelecAluno>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}