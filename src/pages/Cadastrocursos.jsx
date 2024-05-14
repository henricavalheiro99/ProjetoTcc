import { useRef, useState,StyleSheet } from "react";
import css from './CadastroCurso.module.css'
import BarraLateral from "../components/BarraLateral";
import {Link} from "react-router-dom";
function Cadastrocursos(){
    return (
        <div style={css.tudo}>
            <div className={css.main + ' container-fluid'}>
                <div className={css.tudo + " row"}>
                    <div className={css.barra + ' col-3'}>
                        <BarraLateral></BarraLateral>
                    </div>
                    <div className={css.addTurmas + ' col-9'}>
                        {/*comecinho*/}
                        <div className={css.botao}>
                            <h1>Cadastro de Cursos:</h1>
                            <Link to={"/novapagcadastro"} style={{textDecoration: "none"}}>
                                <button>
                                    <img className={css.mais} src="/maizinho.png"/>
                                    Criar novo
                                </button>
                            </Link>
                        </div>
                        <div className={css.comecinho}>
                            <div>
                                <h5 style={{marginBottom: "20px"}}>Cursos em andamento:</h5>
                            </div>
                        </div>

                        {/*cursos*/}
                        <div className={css.cursos}>
                            <img className={css.rede} src="/rede.png"/>
                            <div className={css.div}>
                                <h2>Introduction to networks</h2>
                                <h7>Networking de negócios é a prática de construir
                                    relacionamentos com indivíduos e empresas para fins
                                    profissionais. Network é um termo usado principalmente
                                    no meio corporativo para descrever uma rede de contatos
                                    por meio da qual profissionais se ajudam mutuamente,
                                    com o objetivo de serem bem-sucedidos na carreira.
                                    Isso pode se dar por meio de conselhos, indicações para vagas,
                                    entre outras possibilidades. Você já se perguntou por que
                                    algumas pessoas ficam sabendo antes sobre as melhores oportunidades
                                    de trabalho?
                                </h7>

                                <button className={css.saibamais}>
                                    Saiba mais
                                </button>

                                <div className={css.botao2}>
                                    <button>
                                        <img src="/editar.png"
                                             style={{width: "20px", backgroundColor: "#E7E7E7"}}/>
                                    </button>
                                    <button>
                                        <img src="/excluir.png"
                                             style={{width: "20px", backgroundColor: "#E7E7E7"}}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cadastrocursos;