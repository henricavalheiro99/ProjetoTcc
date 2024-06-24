import css from "./CadastrarTurmas.module.css"
import BarraLateral from "../components/BarraLateral";
import SeletorDeDias from "../components/SeletorDeDias";
import ComboBoxExample from "../components/ComboBox";
import {useState} from "react";
import InputSalas from "../components/InputSalas";

export default function CadastrarTurmas() {
    const [nomeDaTurma, setNomeDaTurma] = useState('');
    const [inicioAulas, setInicioAulas] = useState('');
    const [finalAulas, setFinalAulas] = useState('');
    const [diasDaSemana, setDiasDaSemana] = useState('');
    const [curso_id, setCurso_id] = useState('');
    const [user_id, setUser_id] = useState('');
    const [sala_id, setSala_id] = useState('');
    const [sala, setSala] = useState(null)
    const [lista, setLista] = useState([]);
    const [diasSelecionados, setDiasSelecionados] = useState([]);
    const url = "http://127.0.0.1:5000/turmaspost"
    function reunirDados() {

        const dados = {
            nomeDaTurma,
            diasDaSemana:diasSelecionados,
            inicioAulas,
            finalAulas,
            curso_id,
            user_id,
            sala_id
        };

        let config = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        };

        fetch(url, config)
            .then(response => response.json())
            .then(data => {
                //setLista(data.turmas);
                alert(data); // Mostrar resposta do servidor
                console.log(data); // Mostrar resposta do servidor no console
            })
            .catch(error => alert(error)); // Mostrar erro, se houver
    }
    const ano = 2024; // Ano desejado para consultar os feriados

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
                                    <div className={css.juncaoCB}>
                                        <InputSalas set={setNomeDaTurma} placeholder={'Nome da Turma'}   state={nomeDaTurma} texto={"Nome da Turma"}></InputSalas>
                                        <InputSalas set={setInicioAulas} placeholder={'Início das aulas'} tipo={'date'}  state={inicioAulas} texto={"Início das aulas"}></InputSalas>
                                        <InputSalas set={setFinalAulas} placeholder={'Fim das aulas'} tipo={'date'}   state={finalAulas} texto={"Fim das aulas"}></InputSalas>
                                        <InputSalas set={setSala_id} placeholder={'Número da sala'}   state={sala_id} texto={"Id da sala"}></InputSalas>

                                </div>
                                </div>
                                <p>Aulas Semanais:</p>
                                <SeletorDeDias setDiasSelecionados={setDiasSelecionados} diasSelecionados={diasSelecionados} value={diasDaSemana}></SeletorDeDias>
                                <div className={css.combos + ' d-flex gap-3'}>
                                    <ComboBoxExample
                                        label={" "}
                                        tamanho={'38vw'}
                                        titulo={'Selecionar curso'}
                                        setValor={setCurso_id}
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
                                    <ComboBoxExample
                                        label={" "}
                                        tamanho={'38vw'}
                                        titulo={'Selecionar instrutor'}
                                        setValor={setUser_id}
                                        itens={[
                                            {
                                                nome: "Laís",
                                                valor: 1
                                            },
                                            {
                                                nome: "Igor",
                                                valor: 2
                                            }
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className={css.divalunos + ' col-4'}>
                                <div className={css.alunos}>
                                    <p>Alunos: </p>
                                    <button>+</button>
                                </div>
                                <div className={css.alunosLista}>
       <div className={css.alunosCard}>
                                        <img src="./Altininho.png" alt=""/>
                                        <p className={css.textonome + ' m-0'}>Lucas Altino do Arrocha</p>
                                    </div>

                                    <div className={css.alunosCard}>
                                        <img src="./Altininho.png" alt=""/>
                                        <p className={css.textonome + ' m-0'}>Lucas Altino do Arrocha</p>
                                    </div>

                                    <div className={css.alunosCard}>
                                        <img src="./Altininho.png" alt=""/>
                                        <p className={css.textonome + ' m-0'}>Lucas Altino do Arrocha</p>
                                    </div>

                                    <div className={css.alunosCard}>
                                        <img src="./Altininho.png" alt=""/>
                                        <p className={css.textonome + ' m-0'}>Lucas Altino do Arrocha</p>
                                    </div>

                                    <div className={css.alunosCard}>
                                        <img src="./Altininho.png" alt=""/>
                                        <p className={css.textonome + ' m-0'}>Lucas Altino do Arrocha</p>
                                    </div>

                                    <div className={css.alunosCard}>
                                        <img src="./Altininho.png" alt=""/>
                                        <p className={css.textonome + ' m-0'}>Lucas Altino do Arrocha</p>
                                    </div>
                                </div>

                                <div className={css.botaoSDiv} style={{display:"flex", justifyContent:"center"}}><button className={css.botaoSalvar} onClick={reunirDados}>Salvar</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )}
