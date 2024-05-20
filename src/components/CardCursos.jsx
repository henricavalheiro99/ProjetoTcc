import css from "./CardCursos.module.css"

export default function CardCursos({title, subtitle, btn}){
    return(
      <div className={css.Cards}>
          <img className={css.imagem} src="/rede.png"/>
          <p className={css.title}>{title}</p>
          <p className={css.subtitle}>{subtitle}</p>
          <div className={css.divbaixo}>
              <div className={css.divIcones}>
                  <i className={css.icone + " fa-regular fa-pen-to-square"}></i>
                  <i className={css.icone + " fa-solid fa-trash-can"}></i>
              </div>
          </div>
      </div>
    );
}