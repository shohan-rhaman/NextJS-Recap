import ProductCard from "@/components/ProductCard";

const getProducts = async ()=>{
    // force-cache is a cache option used to explicitly store and reuse the response of a data request
    // const res = await fetch("http://localhost:5000/products", {cache: "force-cache"});

    // This data is fetched live from the API every time a user visits the page
    // const res = await fetch("http://localhost:5000/products", {cache: "no-store"});

    // Cache this request, but revalidate (refresh) it at most every 60 seconds
    const res = await fetch("http://localhost:5000/products", {next: { revalidate: 60 }});
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