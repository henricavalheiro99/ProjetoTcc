import css from "./CardsAlunosCadastrados.module.css"

export default function CardsAlunosCadastrados({imagem, nome}){
    return(
      <div className={css.card}>
        <div className={css.alinharDiv}>
            <img className={css.img} src={imagem} />
            <p className={css.nome}>{nome}</p>
        </div>

        <div>
            <i className={css.icone + "fa-regular fa-pen-to-square"}></i>
            <i className={css.icone + "fa-solid fa-trash-can"}></i>
        </div>
      </div>
    );
}