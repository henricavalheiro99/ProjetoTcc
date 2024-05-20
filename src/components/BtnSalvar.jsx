import css from "./BtnSalvar.module.css"

export default function BtnSalvar({title}){
    return (
        <div className={css.div}>
            <button className={css.salvarBotao}>{title}</button>
        </div>
    );
}