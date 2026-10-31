import ProductCard from "@/components/ProductCard";

const getProducts = async ()=>{
    const res = await fetch("http://localhost:5000/products");
    return res.json();
}

const ProductsPage = async () => {
    const products = await getProducts();
    return (
        <div>
            <h3>Alahmdolillah this is our product page</h3>
            <h3>Out products: {products.length}</h3>
            <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto mt-10">
                {
                    products.map(product => <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;