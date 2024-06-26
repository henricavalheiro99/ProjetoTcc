import { useRef, useState } from "react";
import css from './Cadastro.module.css'
import BtnEsquerda from "../components/BtnEsquerda";
import InputCadastro from "../components/InputCadastro";
import BtnDireita from "../components/BtnDireita";



function Cadastro() {
    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')
    const[funcao, setFuncao] = useState('')
    const[cpf, setCpf] = useState('')
    const[imagem, setImagem] = useState('')
    const [users,setUsers] = useState([])
    function reunirDados (){
        const url = "http://127.0.0.1:5000/usuarios"
        if (nome === "" || email === "" || senha === "" || funcao === ""){
            alert("Preencha todos os campos")
            return;
        }

        const dados = {
            nome,
            senha,
            funcao,
            email,
            cpf,
            imagem
        }

        let config = {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(dados)
        }

        fetch(url, config)
            .then((dados)=>dados.json())
            .then(function (data) {
                setUsers(data.usuario)
            })
            .catch((erro) =>alert(erro))
    }

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
                    <BtnEsquerda link={"/login"} title={"Entrar"}></BtnEsquerda>
                </div>
                <div className={css.direita + ' col-8'}>
                    <div className={css.divtitle + " row"}>
                        <h2 className={css.title}>Crie sua conta</h2>
                    </div>
                    <div>
                        <div className={css.divinput}>
                            <InputCadastro tipo={"text"} name={"nome"} placeholder={"Insira o nome"} icone={"fa-user"}
                                           state={nome} set={setNome} margemBottom={"30px"} altura={"45px"} fonte={'22px'}></InputCadastro>
                             <InputCadastro tipo={"text"} name={"email"} placeholder={"Insira o email"}
                                           icone={"fa-envelope"} state={email} set={setEmail} margemBottom={"30px"} altura={"45px"} fonte={'22px'}></InputCadastro>
                            <InputCadastro tipo={"password"} name={"senha"} placeholder={"Insira a senha"}
                                           icone={"fa-key"} state={senha} set={setSenha} margemBottom={"30px"} altura={"45px"} fonte={'22px'}></InputCadastro>
                        </div>
                        <BtnDireita title={"Cadastrar"} action={reunirDados}></BtnDireita>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;