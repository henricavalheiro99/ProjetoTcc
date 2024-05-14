import css from "./InputSearch.module.css"

export default function InputSearch(){
    return(
        <div className={css.rowInput + " row"}>
            <div className={css.divSearch}>
                <input placeholder={"Buscar..."} className={css.inputSearch}/>
                <i className={css.iconeLupa + " fa-solid fa-magnifying-glass"}></i>
            </div>
        </div>
    );
}