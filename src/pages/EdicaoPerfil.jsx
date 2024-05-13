import css from "./EdicaoPerfil.module.css"
import {useState} from "react";
import InputEdicao from "../components/InputEdicao";
import BtnConfirmar from "../components/BtnConfirmar";
import TrocaImagem from "../components/TrocaImagem";
function EdicaoPerfil(){
    const[nome, setNome] = useState('')
    const[senha, setSenha] = useState('')
    const[confirmar, setConfirmar] = useState('')

    function reunirDados (){
        if (nome === "" || confirmar === "" || senha === ""){
            alert("Preencha todos os campos")
            return;
        } else if (senha !== confirmar){
            alert("Senhas diferentes")
            return;
        }

        const dados = {
            nome,
            senha,
            confirmar
        }

        alert(dados)
        console.log(dados)
    }

    return(
        <div className={css.main + " container-fluid"}>
            <div className={css.meio + ' row'} style={{backgroundImage: `url(./backgroundImage.png)`}}>
                <div className={'col'}>
                    <div className={css.rowOne + " row"}>
                        <img className={css.logo} src='./logo2.png'/>
                    </div>

                    <div className={css.rowTwo + " row"}>
                        <TrocaImagem altura={"100px"} largura={"100px"} fonte={"60px"}></TrocaImagem>
                    </div>

                    <div className={css.rowThree + " row"}>
                        <div className={css.AlinharRow}>
                            <p className={css.title}>Trocar Foto</p>
                            <i className={css.iconeLapis + " fa-solid fa-pencil"}></i>
                        </div>
                    </div>

                    <div className={css.rowFour + " row"}>
                        <InputEdicao tipo={"text"} name={"nome"} placeholder={"Insira o nome"} icone={"fa-user"}
                                       state={nome} set={setNome}></InputEdicao>
                        <InputEdicao tipo={"password"} name={"senha"} placeholder={"Insira a senha"}
                                       icone={"fa-key"} state={senha} set={setSenha}></InputEdicao>
                        <InputEdicao tipo={"password"} name={"senha"} placeholder={"Confirme a senha"}
                                       icone={"fa-key"} state={confirmar} set={setConfirmar}></InputEdicao>
                    </div>

                    <div className={css.rowFive + " row"}>
                        <BtnConfirmar title={"Confirmar"} action={reunirDados}></BtnConfirmar>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default EdicaoPerfil