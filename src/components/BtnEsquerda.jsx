import css from './BtnEsquerda.module.css'
import {Link} from "react-router-dom";

export default function BtnEsquerda({link, title}){
    return(
        <div>
            <div className={css.divbtncireita}>
                <button className={css.btndireita}><Link className={css.redirect} to={link}>{title}</Link></button>
            </div>
        </div>
    );
}