import { Props as ProductCardProps } from "../components/ProductCard";



export interface Product {
    id: string;
    title: string;
    img?: string
}

export interface ProductContexProps {
    counter:number;
    increasBy: (value:number)=>void;
    product: Product;
}


export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps) : JSX.Element,
    
}