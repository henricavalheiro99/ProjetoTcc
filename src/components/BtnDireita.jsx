import css from './BtnDireita.module.css'

export default function BtnDireita({title}){
    return(
        <div>
            <div className={css.divbtndireita}>
                <button className={css.btnDireita}>{title}</button>
            </div>
        </div>
    );
}