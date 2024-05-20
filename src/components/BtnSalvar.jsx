import css from "./BtnSalvar.module.css"

export default function BtnSalvar({title, margem}){
    return (
        <div className={css.div} style={{marginTop: margem}}>
            <button className={css.salvarBotao}>{title}</button>
        </div>
    );
}