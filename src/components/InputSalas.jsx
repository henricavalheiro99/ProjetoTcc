import css from "./InputSalas.module.css"
import {type} from "@testing-library/user-event/dist/type";

export default function InputCadastro({placeholder, icone, state, set,tipo}){
    return(
        <div className={css.pegaTudo}>
            <div className={css.divInput}>
                {/*<i className="fa-solid fa-key"></i>*/}
                {/*<i className="fa-solid fa-envelope"></i>*/}
                <i className={css.icone + " fa-solid " + icone}></i>
                <input
                        value={state}
                        type={tipo}
                        onChange={(e) =>  set(e.target.value)}
                        className={css.inputCadastro}
                        placeholder={placeholder}/>
                {/* olho do edge   */}
            </div>
        </div>
    );
}