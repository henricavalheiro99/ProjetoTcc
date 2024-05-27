import css from "./CadastrarTurmas.module.css"
import BarraLateral from "../components/BarraLateral";
import BotaoCriar from "../components/BotaoCriar";
import InputSearch from "../components/InputSearch";
import SelecAluno from "../components/SelecAluno";
import DaySelector from "../components/SeletorDeDias";
import SeletorDeDias from "../components/SeletorDeDias";

export default function CadastrarTurmas() {
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
                    <div>

                    </div>
                    <div className={css.listaAlunos}>
                        <div className={css.divtudo + ' row'}>
                            <div className={css.divcadastro + ' col-8'}>
                                <div className={css.divinputs + ' row w-100 '}>
                                    <input placeholder={'Nome'} className={css.inputs + ' col-12'} type="text"/>
                                    <input placeholder={'Início'} className={css.inputs + ' col-4'} type="text"/>
                                    <input placeholder={'Término'} className={css.inputs + ' col-4'} type="text"/>
                                    <input placeholder={'Horário'} className={css.inputs + ' col-4'} type="text"/>
                                    <input placeholder={'Docente/Professor'} className={css.inputs + ' col-8'} type="text"/>
                                    <input placeholder={'Sala'} className={css.inputs + ' col-4'} type="text"/>
                                </div>
                                <p>Aulas Semanais:</p>
                                <SeletorDeDias></SeletorDeDias>
                                <textarea className={ css.textarea}>

                                </textarea>
                            </div>
                            <div className={css.divalunos + ' col-4'}>
                                <div className={css.alunos}>
                                    <p>Alunos: </p>
                                    <button>+</button>
                                </div>
                                <div className={css.alunosLista}>
                                    <div>
                                        <img src="./Altininho.png" alt=""/>
                                        <p className={css.textonome + ' m-0'}>Lucas Altino do Arrocha</p>
                                    </div>
                                    <div>
                                        <img src="./Altininho.png" alt=""/>
                                        <p className={css.textonome + ' m-0'}>Lucas Altino do Arrocha</p>
                                    </div>
                                    <div>
                                        <img src="./Altininho.png" alt=""/>
                                        <p className={css.textonome + ' m-0'}>Lucas Altino do Arrocha</p>
                                    </div>
                                </div>

                                <div className={css.botaoSDiv} style={{display:"flex", justifyContent:"center"}}><button className={css.botaoSalvar}>Salvar</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
