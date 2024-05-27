import {useRef, useState, StyleSheet, useEffect} from "react";
import css from './CadastroCurso.module.css'
import BarraLateral from "../components/BarraLateral";
import BotaoCriar from "../components/BotaoCriar";
import CardCursos from "../components/CardCursos";

function Cadastrocursos(){
    const [cursos,setCursos] = useState([])
    const [url,setUrl] = useState("http://127.0.0.1:5000/curso")
    useEffect(() => {
        mostraCursos()
    }, []);
    async function mostraCursos(){
        let config = {
            methods: 'GET',
            headers: {
                "Content-Type":"application/json"
            }
        }
        fetch(url, config)
            .then((dados)=>dados.json())
            .then(function (data) {
                setCursos([...data.cursos])
                console.log(cursos)
            })
            .catch((erro) =>alert(erro))
    }

    console.log(cursos)
    return (
        <div className={css.main + ' container-fluid'}>
            <div className={css.tudo + " row"}>
                <div className={css.barra + ' col-3'}>
                    <BarraLateral></BarraLateral>
                </div>
                <div className={css.meio + ' col-9'}>
                    <div className={css.divTitle}>
                        <BotaoCriar nome={"Cadastrar Turma:"}></BotaoCriar>
                    </div>

                    <div className={css.divSubtitle}>
                        <p className={css.subtitle}>Cursos em andamento</p>
                    </div>

                    <div className={css.divCards + " row"}>
                        {cursos.map((obj,index) => (
                            <div>
                                <p key={index}>{obj.nomeCurso}</p>
                                <p key={index}>{obj.descricao}</p>
                                <p key={index}>{obj.cargaHoraria}</p>
                                <p key={index}>{obj.diasSemanaCurso}</p>
                                <p key={index}>{obj.dataFinal}</p>
                            </div>
                        ))}
                        <CardCursos title={"Introduction to networks"} subtitle={"Networking de negócios é a prática de construir relacionamentos com indivíduos e empresas para fins profissionais..."} btn={"Saiba Mais"}></CardCursos>
                        <CardCursos title={"Introduction to networks"} subtitle={"Networking de negócios é a prática de construir relacionamentos com indivíduos e empresas para fins profissionais. Network é um termo usado principalmente no meio corporativo para descrever uma rede de contatos por meio da qual profissionais se ajudam mutuamente, com o objetivo de serem bem-sucedidos na carreira. Isso pode se dar por meio de conselhos, indicações para vagas, entre outras possibilidades. Você já se perguntou por que algumas pessoas ficam sabendo antes sobre as melhores oportunidades de trabalho?"} btn={"Diminuir"}></CardCursos>
                        <CardCursos title={"Introduction to networks"} subtitle={"Networking de negócios é a prática de construir relacionamentos com indivíduos e empresas para fins profissionais..."} btn={"Saiba Mais"}></CardCursos>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cadastrocursos;