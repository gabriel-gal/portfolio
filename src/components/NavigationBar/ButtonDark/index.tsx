import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import styles from '../../../styles/NavigationBar/ButtonDark.module.css'

export default function ButtonDark(){
    return(
        <div>
            <div className={styles.container}>
                <div className={styles.active}>
                    <NightlightRoundIcon className={styles.moon}/>
                </div>
                <WbSunnyIcon className={styles.sun}/>
            </div>
        </div>
    )
}