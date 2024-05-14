import { useRef, useState,StyleSheet } from "react";
import css from './NovaPagCadastro.module.css'
import BarraLateral from "../components/BarraLateral";
import {Link} from "react-router-dom";
function NovaPagCadastro(){
    return (
        <div style={css.tudinho}>
            <div className={css.main + ' container-fluid'}>
                <div className={css.tudo + " row"}>
                    <div className={css.barra + ' col-3'}>
                        <BarraLateral></BarraLateral>
                    </div>
                    <div className={css.addTurmas + ' col-9'}>
                        {/*header*/}
                        <div className={css.branco}>
                            <div className={css.botao}>
                                <h1>Cadastro de Cursos:</h1>
                                <button>
                                    <img className={css.mais} src="/maizinho.png"/>
                                    Criar novo
                                </button>
                            </div>
                            <div className={css.comecinho}>
                                <div>
                                    <h5 style={{marginBottom: "20px"}}>Cursos em andamento:</h5>
                                </div>
                            </div>

                            {/*input*/}
                            <div>
                                <form className={css.divinput}>
                                    <div className={css.grid}>
                                        <div className={css.tres}>
                                            <div>
                                                <input
                                                    style={{
                                                        backgroundColor: "#E7E7E7",
                                                        borderRadius: "10px",
                                                        padding: "10px",
                                                        border: "none",
                                                        display: "grid",
                                                        marginBottom: '30px',
                                                        width: "530px"
                                                    }}
                                                    placeholder={"Nome do curso:"}
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    style={{
                                                        backgroundColor: "#E7E7E7",
                                                        borderRadius: "10px",
                                                        padding: "10px",
                                                        border: "none",
                                                        marginBottom: '30px',
                                                        width: "530px"
                                                    }}
                                                    placeholder={"Carga horaria:"}
                                                />
                                            </div>

                                            <div>
                                                <input
                                                    style={{
                                                        backgroundColor: "#E7E7E7",
                                                        borderRadius: "10px",
                                                        padding: "10px",
                                                        border: "none",
                                                        marginBottom: '30px',
                                                        width: "530px"
                                                    }}
                                                    placeholder={"Tipo:"}
                                                />
                                            </div>
                                        </div>
                                        <div className={css.divimg}>
                                            <img className={css.img} style={{
                                                backgroundColor: "#E7E7E7",
                                                borderRadius: "10px",
                                                width: "104px"
                                            }} src="/camera.png"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            style={{
                                                backgroundColor: "#E7E7E7",
                                                borderRadius: "10px",
                                                padding: "21px 60px 160px 22px",
                                                border: "none",
                                                gap: "20px",
                                                margin: "20px",
                                                width: "900px",
                                                margintop: "13px"
                                            }}
                                            placeholder={"Descrição:"}
                                        />
                                    </div>
                                </form>
                            </div>
                            <Link  style={{textDecoration: "none"}} to={"/cadastrocursos"}>
                                <button className={css.salvar}>
                                    Salvar
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NovaPagCadastro;