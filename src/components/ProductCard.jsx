const ProductCard = ({ product }) => {
    const {title, description} = product;
  return (
    <div class="card card-border bg-base-100 ">
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>
          {description}
        </p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
