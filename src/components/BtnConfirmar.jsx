import css from './BtnConfirmar.module.css'

export default function BtnConfirmar({title, action}){
    return(
        <div>
            <div className={css.divbtndireita}>
                <button onClick={action} className={css.btnDireita}>{title}</button>
            </div>
        </div>
    );
}