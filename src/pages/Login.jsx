import css from "./Login.module.css"
import BtnEsquerda from "../components/BtnEsquerda";
import {useState} from "react";
import InputSalas from "../components/InputSalas";
import {useNavigate} from "react-router-dom";
import BtnConfirmar from "../components/BtnConfirmar";

export default function Login(){
    const navigate = useNavigate();
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    async function loginEnvia() {
        const dados = {
            email,
            senha
        };

        let url = "http://127.0.0.1:5000/login";
        let options = {
            method: "POST",
            body: JSON.stringify(dados),
            headers: {"Content-Type": "application/json"}
        };
        fetch(url, options)
            .then(resposta => resposta.json())
            .then(retorno => {
                console.log(retorno)
                alert(retorno.mensagem)
                if(retorno.mensagem === "Login com sucesso"){
                    localStorage.setItem('usuario', JSON.stringify(retorno.usuario))
                    navigate('/home')
                }
            })
            .catch(erro => alert(erro));
    }


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
                    <BtnEsquerda link={"/cadastro"} title={"Criar"}></BtnEsquerda>
                </div>
                <div className={css.direita + ' col-8'}>
                    <div className={css.divtitle + " row"}>
                        <h2 className={css.title}>Entre na sua conta</h2>
                    </div>
                    <div>
                        <div className={"d-flex flex-column gap-4"}>
                            <InputSalas set={setEmail} placeholder={'Digite seu Email'} tipo={'text'}  state={email} texto={"Digite seu Email"}></InputSalas>
                            <InputSalas set={setSenha} placeholder={'Digite sua Senha'} tipo={'text'}  state={senha} texto={"Digite sua Senha"}></InputSalas>
                        </div>
                        <BtnConfirmar title={'Entar na sua conta'} action={loginEnvia}></BtnConfirmar>
                    </div>
                </div>
            </div>
        </div>
    );




}