import css from "./ComboBox.module.css";

export default function ComboBox({label,titulo, itens,tamanho, setValor}){
    return(
        <div>
            <label>{label}</label>
            <select className={css.combo} style={{width:tamanho}}  onChange={(e) => setValor(e.target.value)}>
                <option value='inicial'>{titulo}</option>
                {itens.map(item => (
                    <option value={item.valor}>{item.nome}</option>
                ))}
            </select>
        </div>
    );
}