import css from "./CardCursos.module.css"

export default function CardCursos({title, subtitle, btn}){
    return(
      <div className={css.Cards}>
          <img className={css.imagem} src="/rede.png"/>
          <p className={css.title}>{title}</p>
          <p className={css.subtitle}>{subtitle}</p>
          <div className={css.divbaixo}>
              <div className={css.divIcones}>
              </div>
          </div>
      </div>
    );
}