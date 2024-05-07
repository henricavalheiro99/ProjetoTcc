import { useRef, useState } from "react";
import css from './Cadastro.module.css'
import BtnEsquerda from "./BtnEsquerda";
import InputCadastro from "./InputCadastro";
import BtnDireita from "./BtnDireita";



function Cadastro() {
    return (
        <div className={css.main + " container-fluid"}>
            <div className={css.meio + ' row'}>
                <div className={css.lateral + ' col-4'}>
                    <div className={css.divlogo}>
                        <img className={css.logo} src='./logo1.png'/>
                    </div>
                    <div className={css.divdireitatitle}>
                        <h1 className={css.titledireita}>Bem Vindo <br></br> De volta</h1>
                        <p className={css.subtitledireita}>Aqui você planeja seus estudos</p>
                    </div>
                    <BtnEsquerda></BtnEsquerda>
                </div>
                <div className={css.direita + ' col-8'}>
                    <div className={css.divtitle + " row"}>
                        <h2 className={css.title}>Crie sua conta</h2>
                    </div>
                    <div>
                        <InputCadastro></InputCadastro>
                        <InputCadastro></InputCadastro>
                        <InputCadastro></InputCadastro>
                    </div>
                    <BtnDireita></BtnDireita>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;