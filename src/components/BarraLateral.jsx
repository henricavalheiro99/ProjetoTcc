import css from "./BarraLateral.module.css"
import * as PropTypes from "prop-types";

function FontAwesomeIcon(props) {
    return null;
}

FontAwesomeIcon.propTypes = {icon: PropTypes.any};
export default function BarraLateral(){
    return (
        <div className={css.barra + ' w-100'}>
            <div className={css.logoBarra}>
                <img className={css.logo} src='./logo Time.svg'/>
            </div>
            <div className={css.divuser}>
                <div className={css.divPerfil}>
                    <img className={css.foto} src="LESS.webp" alt=""/>
                    <div className={css.infosPerfil}>
                        <p>Loud Less</p>
                        <p className={css.cargo}>A máquina</p>
                    </div>
                </div>
            </div>
            <button className={css.divI}>
                <img src="./sala.svg" alt=""/>
                <p>Cadastro de Salas</p>
            </button>
            <button className={css.divI}>
                <img src="./Livro.svg" alt=""/>
                <p>Cadastro de Curso</p>
            </button>
            <button className={css.divI}>
                <img src="./certificado.svg" alt=""/>
                <p>Cadastro de Turmas</p>
            </button>
            <button className={css.divI}>
                <img src="./calendario.svg" alt=""/>
                <p>Calendário Anual</p>
            </button>
            <button className={css.divI}>
                <img src="./userMais.svg" alt=""/>
                <p>Cadastro de Usuarios</p>
            </button>

            <button className={css.divII}>
                <img src="./Config.png" alt=""/>
                <p>Configurações</p>
            </button>
        </div>
    );
}