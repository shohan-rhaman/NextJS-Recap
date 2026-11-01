const ProductCard = ({ product }) => {
    const {title, description} = product;
  return (
    <div className="card card-border bg-base-100 ">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
