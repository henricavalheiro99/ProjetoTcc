import css from "./InputSalas.module.css"

export default function InputSalas({texto}){
    return (
        <div className={css.pegaTudo}>
            <div className={css.divInput}>
                <input className={css.inputCadastro}
                       placeholder={texto}/>
                {/* olho do edge   */}
            </div>
        </div>
    );
}