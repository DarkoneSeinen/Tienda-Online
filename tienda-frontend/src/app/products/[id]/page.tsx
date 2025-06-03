import { getProduct } from "../products.api";

interface Props {
    params: {
        id: string
    }
}

async function ProductDetailPage({params}: Props) {
    console.log(params)
    const product = await getProduct(params.id)
    return (
        <div>
            <h1>Product Detail Page</h1>
            <p>This is where the product details will be displayed.</p>
        </div>
    );
}

export default ProductDetailPage;