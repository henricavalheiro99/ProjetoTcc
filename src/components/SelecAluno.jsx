import css from "./SelectAluno.module.css"

export default function SelecAluno(props){
    return (
        <div className={css.divtotal}>
            <div className={css.nome}>
                <img className={css.imguser} src={props.imagem} alt=""/>
                <p className={' m-0'}> {props.nomeAluno} </p>
                <p> {props.idAluno} </p>
            </div>
            <div></div>
        </div>
    );
}