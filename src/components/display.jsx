import styles from './display.module.css'
function Display({dis}){
    return <input  className={styles.dislay} type="text"value={dis} readOnly></input>
}
export default Display;