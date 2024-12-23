import styles from './button.module.css';

function ButtonComponent({Onbuttonclick}) {
    const buttonarray = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

    return (
        <div className={styles.button1}>
            {buttonarray.map((buttonitem, index) => (
                <button onClick={()=>Onbuttonclick(buttonitem)} key={index}>{buttonitem}</button>
            ))}
        </div>
    );
}

export default ButtonComponent;
