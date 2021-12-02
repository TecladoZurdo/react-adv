import styles from '../styles/styles.module.css';
import { useContext } from "react";
import { ProductContext } from "./ProductCard";

interface Props {
    className?:string
}

export const ProductButtons = ({className}:Props) => {

    const {increasBy,counter} = useContext(ProductContext);

    return (
        <div className={`${styles.buttonsContainer} ${className}`}>
            <button className={styles.buttonMinus} onClick={() => increasBy(-1)}> - </button>
            <div className={styles.countLabel}> {counter}</div>
            <button className={styles.buttonAdd} onClick={() => increasBy(1)}> + </button>
        </div>
    )
}