import { ProductCard,ProductImage,ProductButtons,ProductTitle} from '../components';
const product = 
    {
    id: '1',
    title: 'Coffe Bau',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shoppin Store</h1>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={'Café'} />
                    <ProductCard.Buttons />
                </ProductCard>
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle title={'Café Mate'}/>
                    <ProductButtons  />
                </ProductCard>
            </div>
        </div>
    )
}
