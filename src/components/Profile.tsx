import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';
import { LoginGit } from './LoginGit';



export function Profile(){ 
    const {level} = useContext(ChallengesContext);
 
    return(
        
        
        <div className={styles.profileContainer}>
            <img src="https://github.com/Hitalo-27.png" alt="Hitalo Chaves"/>
         

            <div>
                <strong> Hitalo Chaves </strong>

                <p>
                    <img src="icons/level.svg" alt="Level"/>
                     Level {level}</p>
            </div>
        </div>
    );
   
}