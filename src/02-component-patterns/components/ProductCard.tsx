import { createContext, CSSProperties, ReactElement } from 'react';
import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import {  Product, ProductContexProps } from '../interfaces/products';

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?:string;
    style?: CSSProperties;
}


export const ProductContext = createContext({} as ProductContexProps);
const { Provider } = ProductContext;


export const ProductCard = ({ product, children, className, style }: Props) => {

    const { counter, increasBy } = useProduct();


    return (
        <Provider value={{counter,increasBy,product}}>
        <div className={`${styles.productCard} ${className}`} 
        style={style}>
            {children}
        </div>
        </Provider>
    )
}
