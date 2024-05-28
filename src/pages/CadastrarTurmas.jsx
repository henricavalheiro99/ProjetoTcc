import css from "./CadastrarTurmas.module.css"
import BarraLateral from "../components/BarraLateral";
import BotaoCriar from "../components/BotaoCriar";
import InputSearch from "../components/InputSearch";
import SelecAluno from "../components/SelecAluno";
import SeletorDeDias from "../components/SeletorDeDias";
import ComboBoxExample from "../components/ComboBox";
import {useState} from "react";


export default function CadastrarTurmas() {
    const [sala, setSala] = useState(null)
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
                                    <input placeholder={'Nome Da turma'} className={css.inputs + ' col-12'} type="text"/>

                                    <div className={css.juncaoCB}>
                                        <input placeholder={'Início'} className={css.inputs + ' col-4'} type="date"/>
                                        <input placeholder={'Término'} className={css.inputs + ' col-4'} type="date"/>
                                        <ComboBoxExample
                                            label={" "}
                                            titulo={'Salas'}
                                            tamanho={'10vw'}
                                            setValor={setSala}
                                            itens={[
                                                {
                                                    nome: "Sala 22",
                                                    valor: 1
                                                },
                                                {
                                                    nome: "Sala 23",
                                                    valor: 2
                                                }
                                            ]}
                                        />
                                    </div>


                                    <ComboBoxExample
                                        label={" "}
                                        tamanho={'38vw'}
                                        titulo={'Professores/Instrutores'}
                                        setValor={setSala}
                                        itens={[
                                            {
                                                nome: "Igor",
                                                valor: 1
                                            },
                                            {
                                                nome: "Lais",
                                                valor: 2
                                            }
                                        ]}
                                    />


                                </div>
                                <p>Aulas Semanais:</p>
                                <SeletorDeDias></SeletorDeDias>

                                <ComboBoxExample
                                    label={" "}
                                    tamanho={'38vw'}
                                    titulo={'Selecionar curso'}
                                    setValor={setSala}
                                    itens={[
                                        {
                                            nome: "TI",
                                            valor: 1
                                        },
                                        {
                                            nome: "Eletromecânica",
                                            valor: 2
                                        }
                                    ]}
                                />
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

    )}
