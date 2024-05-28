import css from "./BotaoCriar.module.css"
import { useNavigate } from 'react-router-dom';

export default function BotaoCriar(props){
    const navigate = useNavigate();
    return (
        <div className={css.comeco}>
            <h1 className={css.titulo}>{props.nome}</h1>
            <button className={css.btn} onClick={() => navigate(props.redirect)}><i className={css.icone + " fa-solid fa-plus"}></i>Criar novo</button>
        </div>
    )
}