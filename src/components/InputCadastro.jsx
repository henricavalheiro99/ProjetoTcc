import css from "./InputCadastro.module.css"

export default function InputCadastro({tipo, name, placeholder, icone, state, set, margemBottom, altura, fonte}){
    return(
        <div className={css.pegaTudo} style={{marginBottom: margemBottom}}>
            <div className={css.divInput} style={{height: altura}}>
                {/*<i className="fa-solid fa-key"></i>*/}
                {/*<i className="fa-solid fa-envelope"></i>*/}
                <i className={css.icone + " fa-solid " + icone} style={{fontSize: fonte}}></i>
                <input  type={tipo}
                        name={name}
                        value={state}
                        onChange={(e) =>  set(e.target.value)}
                        className={css.inputCadastro}
                        placeholder={placeholder}/>
                {/* olho do edge   */}
            </div>
        </div>
    );
}