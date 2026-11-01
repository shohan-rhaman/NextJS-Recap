import Link from "next/link";

const BookCard = ({book}) => {
    const {id, title, description} = book;
  return (
    <div className="card bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">Title: {title}</h2>
        <p>
          {description}
        </p>
        <div className="card-actions justify-end">
          <Link href={`/books/${id}`}>
            <button className="btn">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
