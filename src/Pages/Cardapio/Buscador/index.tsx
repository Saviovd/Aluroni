import styles from './Buscador.module.scss'
import { CgSearch } from 'react-icons/cg'

interface PropsBuscador {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({ busca, setBusca }: PropsBuscador) {
    return (
        <div className={styles.buscador}>
            <input
                placeholder='O que Você tem vontade de comer?'
                value={ busca }
                onChange = { evento => setBusca(evento.target.value) }
            />
            <CgSearch 
                size={20}
                color="#4C4D5E"
            />
        </div>
    )
}