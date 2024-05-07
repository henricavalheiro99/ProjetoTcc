import css from './BtnDireita.module.css'

export default function BtnDireita({title, action}){
    return(
        <div>
            <div className={css.divbtndireita}>
                <button onClick={action} className={css.btnDireita}>{title}</button>
            </div>
        </div>
    );
}