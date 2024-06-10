import React, { useState } from 'react';
import styles from './SeletorDeDias.module.css';

const diasDaSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

function SeletorDeDias({diasSelecionados, setDiasSelecionados}) {

    const toggleDia = (index) => {
        const novosDiasSelecionados = diasSelecionados.includes(index)
            ? diasSelecionados.filter(i => i !== index)
            : [...diasSelecionados, index];

        setDiasSelecionados(novosDiasSelecionados);

    };

    return (
        <div className={styles.divI}>
            {diasDaSemana.map((dia, index) => (
                <button
                    key={index}
                    className={`${styles.button} ${diasSelecionados.includes(index) ? styles.buttonSelected : styles.buttonUnselected}`}
                    onClick={() => toggleDia(index)}
                >
                    {dia}
                </button>
            ))}
        </div>
    );
}

export default SeletorDeDias;

