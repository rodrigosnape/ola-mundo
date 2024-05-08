import BotaoPrincipal from 'componentes/BotaoPrincipal';
import styles from './Naoencontrada.module.css';
import erro404 from 'assets/erro_404.png';
import { useNavigate } from 'react-router-dom';

export default function Naoencontrada(){

    const navegar = useNavigate();

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>
                    Ops! Página não encontrada.
                </h1>
                <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.             
                </p>
                <p className={styles.paragrafo}>
                Vestibulum et ante sed lacus tristique molestie. Integer quis arcu porta, vulputate lacus quis, rutrum turpis.           
                </p>

                <div 
                    className={styles.botaoContainer}
                    onClick={() => navegar(-1)}
                >
                        <BotaoPrincipal tamanho='lg'>
                            Voltar
                        </BotaoPrincipal>
                </div>

                <img
                    className={styles.imagemCachorro}
                    src={erro404}
                    alt="Cachorro de óculos e vestido como humano"
                />
            </div>
            <div className={styles.espacoEmBranco}>
                
            </div>
        </>
    )
}