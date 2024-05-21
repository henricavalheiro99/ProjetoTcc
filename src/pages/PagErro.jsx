import css from "./PagErro.module.css"
import { useNavigate } from 'react-router-dom';
export default function PagErro(){
    const navigate = useNavigate();

    const irPara = () => {
        navigate("/home");
    };
    return(
        <div className={css.fundo}>
            <div className={css.retornar}>
                <p>Página não encontrada</p>

                <button onClick={irPara}>
                    Voltar para home
                </button>
            </div>
        </div>
    )
}