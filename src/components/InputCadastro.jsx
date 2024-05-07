import css from "./InputCadastro.module.css"

export default function InputCadastro(){
    return(
        <div className={css.pegaTudo}>
            <div className={css.divInput}>
                {/*<i className="fa-solid fa-key"></i>*/}
                {/*<i className="fa-solid fa-envelope"></i>*/}
                <i className={css.icone + " fa-solid fa-user"}></i>
                <input type={"text"} id={css.inputNome} className={css.inputCadastro} placeholder={"Insira seu Nome"}/>
            </div>
        </div>
    );
}