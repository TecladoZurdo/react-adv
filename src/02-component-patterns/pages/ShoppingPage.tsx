import { ProductCard } from "../components/ProductCard"

const product ={
    id:'1',
    title: 'Coffe Bau',
    img: './coffee-mug.png'
}
export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shoppin Store</h1>
            <hr/>
            <div style={{ display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                <ProductCard product={product}/>
            </div>
        </div>
    )
}
