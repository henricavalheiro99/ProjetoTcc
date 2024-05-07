import css from "./Login.module.css"
import BtnEsquerda from "../components/BtnEsquerda";
import InputCadastro from "../components/InputCadastro";
import BtnDireita from "../components/BtnDireita";

export default function Login(){
    return (
        <div className={css.main + " container-fluid"}>
            <div className={css.meio + ' row'}>
                <div className={css.lateral + ' col-4'}>
                    <div className={css.divlogo}>
                        <img className={css.logo} src='./logo1.png'/>
                    </div>
                    <div className={css.divdireitatitle}>
                        <h1 className={css.titledireita}>Não possui <br></br> Conta?</h1>
                        <p className={css.subtitledireita}>Aqui você planeja seus estudos</p>
                    </div>
                    <BtnEsquerda link={"/cadastro"} title={"Cadastrar"}></BtnEsquerda>
                </div>
                <div className={css.direita + ' col-8'}>
                    <div className={css.divtitle + " row"}>
                        <h2 className={css.title}>Entre na sua conta</h2>
                    </div>
                    <div>
                        <InputCadastro></InputCadastro>
                        <InputCadastro></InputCadastro>
                    </div>
                    <BtnDireita title={"Entrar"}></BtnDireita>
                </div>
            </div>
        </div>
    );
}