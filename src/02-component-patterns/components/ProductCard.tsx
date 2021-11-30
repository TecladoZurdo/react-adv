import { createContext } from 'react';
import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContexProps } from '../interfaces/products';




export const ProductContext = createContext({} as ProductContexProps);
const { Provider } = ProductContext;


export const ProductCard = ({ product, children }: ProductCardProps) => {

    const { counter, increasBy } = useProduct();


    return (
        <Provider value={{counter,increasBy,product}}>
        <div className={styles.productCard}>
            {children}
        </div>
        </Provider>
    )
}
