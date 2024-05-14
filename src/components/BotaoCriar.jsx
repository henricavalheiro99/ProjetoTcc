import css from "./BotaoCriar.module.css"

export default function BotaoCriar(props){
    return (
        <div className={css.comeco}>
            <h1>{props.nome}</h1>
            <button><i className="fa-solid fa-plus"></i> Criar novo</button>
        </div>
    )
}