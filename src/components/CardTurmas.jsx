import css from "./CardTurmas.module.css"

export default function CardTurmas({numero, curso, sala, dia, hora, professor}){
    return(
      <div className={css.divTudo}>
            <div className={css.card}>
                <div className={css.cardCima}>
                    <div className={css.esquerda}>
                        <p className={css.TxtCima}>Turma {numero}</p>
                        <p className={css.TxtCima}>curso: {curso}</p>
                        <p className={css.TxtCima}>-</p>
                        <p className={css.TxtCima}>Sala {sala}</p>
                    </div>

                    <div className={css.direita}>
                        <p className={css.TxtCima}>{dia}</p>
                        <p className={css.TxtCima}>-</p>
                        <p className={css.TxtCima}>{hora}</p>
                    </div>
                </div>

                <div className={css.cardBaixo}>
                    <div className={css.LinhaOne}>
                        <i className={css.icone + " fa-regular fa-pen-to-square"}></i>
                        <i className={css.icone + " fa-solid fa-trash-can"}></i>
                    </div>

                    <div className={css.LinhaTwo}>
                        <p className={css.TxtBaixo}>Professor(a): {professor}</p>
                    </div>

                    <div className={css.LinhaThree}>
                        <button className={css.Btn}>Exibir Alunos</button>
                    </div>
                </div>
            </div>
      </div>
    );
}