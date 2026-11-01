const BookCard = ({book}) => {
    const {title, description} = book;
  return (
    <div className="card bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
