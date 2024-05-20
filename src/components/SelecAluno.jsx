import css from "./SelectAluno.module.css"

export default function SelecAluno(){
    return (
        <div className={css.divtotal}>
            <div className={css.nome}>
                <img src="./Altininho.png" alt=""/>
                <p className={' m-0'}>Lucas Altino do Arrocha</p>
            </div>
            <div></div>
        </div>
    );
}