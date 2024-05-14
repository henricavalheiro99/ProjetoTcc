import css from "./BotaoCriar.module.css"

export default function BotaoCriar(props){
    return (
        <div className={css.comeco}>
            <h1 className={css.titulo}>{props.nome}</h1>
            <button className={css.btn}><i className={css.icone + " fa-solid fa-plus"}></i>Criar novo</button>
        </div>
    )
}