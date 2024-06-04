import css from "./CadastroUsuarios.module.css"
import BarraLateral from "../components/BarraLateral";
import TrocaImagem from "../components/TrocaImagem";
import InputCadastro from "../components/InputCadastro";
import {useState} from "react";
import BtnConfirmar from "../components/BtnConfirmar";
import CardsAlunosCadastrados from "../components/CardsAlunosCadastrados";
import InputSearch from "../components/InputSearch";
function CadastroUsuarios(){
    const[nome, setNome] = useState('')
    const[funcao, setFuncao] = useState('')
    const[cpf, setCpf] = useState('')
    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')
    const [users,setUsers] = useState([])
    const url = "http://127.0.0.1:5000/usuarios"
    function reunirDados (){
        if (nome === "" || email === "" || senha === ""  || funcao === "" || cpf === ""){
            alert("Preencha todos os campos")
            return;
        }

        const dados = {
            nome,
            funcao,
            cpf,
            email,
            senha
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

        alert(dados)
        console.log(dados)
    }

    return(
      <div className={css.main + " container-fluid"}>
            <div className={css.tudo + " row"}>
                <div className={css.esquerda + " col-3"}>
                    <BarraLateral></BarraLateral>
                </div>

                <div className={css.direita + " col-9"}>
                    <div className={css.divtitle + " row"}>
                        <p className={css.title}>Cadastro de usuarios:</p>
                    </div>

                    <div className={css.divResto + " row"}>
                        <div className={css.novoUsuario + " col-7"}>
                            <div className={css.rowEsquerdaOne + " row"}>
                                <p className={css.titleBloco}>Novo usuario:</p>
                            </div>

                            <div className={css.rowEsquerdaTwo + " row"}>
                                <TrocaImagem altura={"80px"} largura={"80px"} fonte={"40px"}></TrocaImagem>
                            </div>

                            <div className={css.rowEsquerdaThree + " row"}>
                                <InputCadastro tipo={"text"} name={"nome"} placeholder={"Insira o nome"} icone={"fa-user"}
                                               state={nome} set={setNome} margemBottom={"8px"} altura={"42px"} fonte={'20px'}></InputCadastro>

                                <InputCadastro tipo={"text"} name={"email"} placeholder={"Insira o email"}
                                               icone={"fa-envelope"} state={email} set={setEmail} margemBottom={"8px"} altura={"42px"} fonte={'20px'}></InputCadastro>

                                <InputCadastro tipo={"text"} name={"CPF"} placeholder={"Insira o CPF"}
                                               icone={"fa-id-card"} state={cpf} set={setCpf} margemBottom={"8px"} altura={"42px"} fonte={'20px'}></InputCadastro>

                                <InputCadastro tipo={"text"} name={"função"} placeholder={"Insira a função"}
                                               icone={"fa-circle-nodes"} state={funcao} set={setFuncao} margemBottom={"8px"} altura={"42px"} fonte={'20px'}></InputCadastro>

                                <InputCadastro tipo={"password"} name={"senha"} placeholder={"Insira a senha"}
                                               icone={"fa-key"} state={senha} set={setSenha} margemBottom={"8px"} altura={"42px"} fonte={'20px'}></InputCadastro>
                            </div>

                            <div className={css.rowEsquerdaFour + " row"}>
                                <BtnConfirmar title={"Cadastrar"} action={reunirDados} ></BtnConfirmar>
                            </div>

                        </div>

                        <div className={css.usuariosCadastrados + " col-4"}>
                            <div className={css.rowDireitaOne + " row"}>
                                <p className={css.titleBloco}>Usuarios cadastrados:</p>
                            </div>

                            <InputSearch></InputSearch>

                            <div className={css.divDireitaTwo + " row"}>
                                <CardsAlunosCadastrados imagem={'./Altininho.png'} nome={"Lucas Altino "}></CardsAlunosCadastrados>
                                <CardsAlunosCadastrados imagem={'./Brunasso.png'} nome={"Brunão melhor mãe"}></CardsAlunosCadastrados>
                                <CardsAlunosCadastrados imagem={'./Brunasso.png'} nome={"Brunão melhor mãe"}></CardsAlunosCadastrados>
                                <CardsAlunosCadastrados imagem={'./Brunasso.png'} nome={"Brunão melhor mãe"}></CardsAlunosCadastrados>
                                <CardsAlunosCadastrados imagem={'./Brunasso.png'} nome={"Brunão melhor mãe"}></CardsAlunosCadastrados>
                                <CardsAlunosCadastrados imagem={'./Brunasso.png'} nome={"Brunão melhor mãe"}></CardsAlunosCadastrados>
                                <CardsAlunosCadastrados imagem={'./Brunasso.png'} nome={"Brunão melhor mãe"}></CardsAlunosCadastrados>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
}

export default CadastroUsuarios