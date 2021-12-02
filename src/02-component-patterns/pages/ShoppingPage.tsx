import { ProductCard,ProductImage,ProductButtons,ProductTitle} from '../components';
import '../styles/custom-styles.css'
const product = 
    {
    id: '1',
    title: 'Coffe Bau',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div >
            <h1>Shoppin Store</h1>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <ProductCard product={product} className="bg-dark text-white">
                    <ProductCard.Image className="custom-image"/>
                    <ProductCard.Title title={'Café'}  className="text-white text-bold"/>
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>
                <ProductCard product={product} className="bg-dark text-white">
                    <ProductImage className="custom-image"/>
                    <ProductTitle title={'Café Mate'} className="text-white text-bold"/>
                    <ProductButtons className="custom-buttons" />
                </ProductCard>
                <ProductCard product={product} style={{backgroundColor:'#70FD12'}}>
                    <ProductImage />
                    <ProductTitle title={'Café Mate'} />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}
