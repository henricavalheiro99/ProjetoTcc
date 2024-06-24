import css from "./BarraLateral.module.css"
import { useNavigate } from 'react-router-dom';
export default function BarraLateral(){
    const navigate = useNavigate();
    const usuario = JSON.parse(localStorage.getItem('usuario'))
    const irPara1 = () => {
        navigate("/salasCadastradas");
    };

    const irPara2 = () => {
        navigate("/cursos");
    };

    const irPara3 = () => {
        navigate("/Turmas");
    };

    const irPara4 = () => {
        navigate("/calendario");
    };

    const irPara5 = () => {
        navigate("/usuarios");
    };

    const irPara6 = () => {
        navigate("/edicao");
    };
    const irPara7 = () => {
        navigate("/login");
    };





    return (
        <div className={css.barra + ' w-100'}>
            <div className={css.logoBarra}>
                <img className={css.logo} src='./logo Time.svg'/>
            </div>
            <div className={css.divuser}>
                <div className={css.divPerfil}>
                    <img className={css.foto} src={usuario.img} alt=""/>
                    <div className={css.infosPerfil + ' d-flex'}>
                        <p className={' mb-0'}>{usuario.nome}</p>
                        <button className={css.btnSair} onClick={irPara7}>Sair</button>
                    </div>
                </div>
            </div>
            <button onClick={irPara1} className={css.divI}>
                <img src="./sala.svg" alt=""/>
                <p>Cadastro de Salas</p>
            </button>
            <button onClick={irPara2} className={css.divI}>
                <img src="./Livro.svg" alt=""/>
                <p>Cadastro de Curso</p>
            </button>
            <button onClick={irPara3} className={css.divI}>
                <img src="./certificado.svg" alt=""/>
                <p>Cadastro de Turmas</p>
            </button>
            <button onClick={irPara4} className={css.divI}>
                <img src="./calendario.svg" alt=""/>
                <p>Calendário Anual</p>
            </button>
            <button onClick={irPara5} className={css.divI}>
                <img src="./userMais.svg" alt=""/>
                <p>Cadastro de Usuarios</p>
            </button>
            <button onClick={irPara6} className={css.divII}>
                <img src="./Config.png" alt=""/>
                <p>Configurações</p>
            </button>
        </div>
    );
}
