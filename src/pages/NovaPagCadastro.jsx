import { useRef, useState,StyleSheet } from "react";
import css from './NovaPagCadastro.module.css'
import BarraLateral from "../components/BarraLateral";
import BotaoCriar from "../components/BotaoCriar";
import BtnSalvar from "../components/BtnSalvar";
import InputSalas from "../components/InputSalas";

function NovaPagCadastro(){
    return (
        <div className={css.main + ' container-fluid'}>
            <div className={css.tudo + " row"}>
                <div className={css.barra + ' col-3'}>
                    <BarraLateral></BarraLateral>
                </div>
                <div className={css.meio + ' col-9'}>
                    <div className={css.divTitle}>
                        <BotaoCriar nome={"Cadastro de Cursos:"}></BotaoCriar>
                    </div>

                    <div className={css.divSubtitle}>
                        <p className={css.subtitle}>Cursos em andamento</p>
                    </div>

                    <div className={css.DivBaixoOne}>
                        <div className={css.CardGigante + " row"}>
                            <div className={css.Cima}>
                                <div className={css.divEsquerdaCima}>
                                    <InputSalas texto={"Nome do curso"}></InputSalas>
                                    <InputSalas texto={"Carga horaria"}></InputSalas>
                                    <InputSalas texto={"Tipo"}></InputSalas>
                                </div>

                                <div className={css.divDireitaCima}>
                                    <i className={css.icone + " fa-regular fa-image"}></i>
                                </div>
                            </div>

                            <div className={css.pegaTudo}>
                                <div className={css.divInput}>
                                    <input className={css.inputCadastro}
                                           placeholder={"Descrição"}/>
                                </div>
                            </div>

                            <BtnSalvar title={"Salvar"} margem={"-15px"}></BtnSalvar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NovaPagCadastro;