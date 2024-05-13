import css from "./TrocaImagem.module.css"

export default function TrocaImagem({altura, largura, fonte}){
    return (
        <div className={css.fundoTrocaImg} style={{height: altura, width: largura}}>
            <i className={css.iconeUser + " fa-regular fa-user"} style={{fontSize: fonte}}></i>
        </div>
    );
}