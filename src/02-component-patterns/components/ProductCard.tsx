import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';

interface Props {
    product:Product
}

interface Product {
    id:string;
    title: string;
    img?:string
}

export const ProductCard = ({product}:Props) => {

    const {counter,increasBy} = useProduct();


    return (
        <div className={styles.productCard}>
            <img className={styles.productImg } src={product.img ? product.img: noImage} alt="coffe" />
            <span className={styles.productDescription}> Coffe Mug</span>
            <div className={styles.buttonsContainer}>
                <button className={styles.buttonMinus} onClick={()=>increasBy(-1) }> - </button>
                <div className={styles.countLabel}> {counter}</div>
                <button className={styles.buttonAdd} onClick={()=>increasBy(1)}> + </button>
            </div>
        </div>
    )
}
