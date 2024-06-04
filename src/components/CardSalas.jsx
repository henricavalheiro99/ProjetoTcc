import css from "./CardSalas.module.css";

export default function CardSalas({nome,numero, descricao}){
    return(
        <div className={css.divTudo}>
            <div className={css.card}>
                <div className={css.cardCima}>
                    <i className={css.icone + " fa-solid fa-trash-can"}></i>
                </div>

                <div className={css.cardBaixo}>
                    <div className={css.LinhaOne}>
                        <p className={css.text}>{nome}</p>
                        <p className={css.text}>Sala de aula n°{numero}</p>
                        <p className={css.text}>{descricao}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}