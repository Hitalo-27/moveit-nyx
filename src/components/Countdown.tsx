import { useContext} from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';



export function Countdown(){
    const {
        minutes,
        secunds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext)
   

    const [minutesLeft, minutesRight] = String(minutes).padStart(2,'0').split('');
    const [secundsLeft, secundsRight] = String(secunds).padStart(2,'0').split('');

   

    return(
        <div>
        <div className= {styles.countdownContainer}>
            <div>
                <span>{minutesLeft}</span>
                <span>{minutesRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secundsLeft}</span>
                <span>{secundsRight}</span>
            </div>
        </div>

        {hasFinished ?(
             <button 
             disabled
             className={styles.countdownButton}>
 
               Ciclo Encerrado
               <img src="/icons/certo7.png" alt="Fechar Modal"/>
                 </button>
        ) : (
            <>
                 {isActive ? (
            <button type="button" 
            className={`${styles.countdownButton2} ${styles.countdownButtonActive}`}

            onClick={resetCountdown}>

              Abandonar Ciclo 
                </button>

            ):(

            <button type="button" 
            className={styles.countdownButton}
            onClick={startCountdown}>

                Iniciar um Ciclo
               

            </button>
    )}
            </>
        )}
       
        </div>

    );
}